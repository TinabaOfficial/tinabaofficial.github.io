/** @type {HTMLElement | null} */
const siteVersionBadge = document.querySelector("[data-site-version]");

if (siteVersionBadge) {
    fetch("/assets/site-version.json", { cache: "no-store" })
        .then(response => {
            if (!response.ok) {
                throw new Error("Site version could not be loaded.");
            }

            return response.json();
        })
        .then(({ version, buildDate }) => {
            siteVersionBadge.textContent = `v${version} · ${buildDate}`;
            siteVersionBadge.setAttribute("aria-label", `Build ${version} del ${buildDate}`);
            siteVersionBadge.hidden = false;
        })
        .catch(() => {
            siteVersionBadge.remove();
        });
}

const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".main-navigation");
const siteHeader = document.querySelector(".site-header");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (siteHeader && !reducedMotion) {
    const header = siteHeader;
    let lastScrollY = window.scrollY;
    let scrollFrame = 0;

    /**
     * Show or hide the header according to the current scroll direction.
     * @returns {void}
     */
    function updateHeader() {
        const currentScrollY = window.scrollY;

        if (currentScrollY <= 80 || currentScrollY < lastScrollY) {
            header.classList.remove("is-hidden");
        } else if (currentScrollY > lastScrollY && !navigation?.classList.contains("is-open")) {
            header.classList.add("is-hidden");
        }

        lastScrollY = currentScrollY;
        scrollFrame = 0;
    }

    window.addEventListener("scroll", () => {
        if (!scrollFrame) {
            scrollFrame = window.requestAnimationFrame(updateHeader);
        }
    }, { passive: true });
}

siteHeader?.addEventListener("focusin", () => {
    siteHeader.classList.remove("is-hidden");
});

/** @type {NodeListOf<HTMLDetailsElement>} */
const navigationGroups = document.querySelectorAll("details.nav-group");

navigationGroups.forEach(group => {
    group.addEventListener("toggle", () => {
        if (!group.open) {
            return;
        }

        navigationGroups.forEach(otherGroup => {
            if (otherGroup !== group) {
                otherGroup.open = false;
            }
        });
    });
});

if (menuToggle && navigation) {
    menuToggle.addEventListener("click", () => {
        const isOpen = menuToggle.getAttribute("aria-expanded") === "true";

        menuToggle.setAttribute("aria-expanded", String(!isOpen));
        navigation.classList.toggle("is-open", !isOpen);
        siteHeader?.classList.remove("is-hidden");
    });

    navigation.addEventListener("click", event => {
        if (event.target instanceof HTMLAnchorElement) {
            menuToggle.setAttribute("aria-expanded", "false");
            navigation.classList.remove("is-open");
        }
    });

    document.addEventListener("keydown", event => {
        if (event.key === "Escape") {
            menuToggle.setAttribute("aria-expanded", "false");
            navigation.classList.remove("is-open");
        }
    });
}

/** @typedef {{ url: string, plain_excerpt: string, meta: Record<string, string> }} SearchResultData */
/** @typedef {{ data: () => Promise<SearchResultData> }} PagefindResult */
/** @typedef {{ init: () => Promise<void>, search: (query: string) => Promise<{ results: PagefindResult[] }> }} PagefindClient */

const searchToggle = document.querySelector(".search-toggle");
const searchDialog = document.querySelector("#site-search");
const searchInput = document.querySelector("#site-search-input");
const searchStatus = document.querySelector("#search-status");
const searchResults = document.querySelector(".search-results");

if (
    searchToggle instanceof HTMLButtonElement &&
    searchDialog instanceof HTMLDialogElement &&
    searchInput instanceof HTMLInputElement &&
    searchStatus instanceof HTMLParagraphElement &&
    searchResults instanceof HTMLOListElement
) {
    const toggle = searchToggle;
    const dialog = searchDialog;
    const input = searchInput;
    const status = searchStatus;
    const resultsList = searchResults;

    /** @type {PagefindClient | null} */
    let pagefindClient = null;

    /** @type {Promise<PagefindClient> | null} */
    let pagefindPromise = null;

    /** @type {number} */
    let searchTimer = 0;

    /** @type {number} */
    let searchRequest = 0;

    /**
     * Load the generated Pagefind client on demand.
     * @returns {Promise<PagefindClient>} The initialized Pagefind client.
     */
    function loadPagefind() {
        if (pagefindClient) {
            return Promise.resolve(pagefindClient);
        }

        if (!pagefindPromise) {
            const searchBundleUrl = new URL("/pagefind/pagefind.js", window.location.origin).href;

            pagefindPromise = import(searchBundleUrl)
                .then(async module => {

                    /** @type {PagefindClient} */
                    const client = module;

                    await client.init();
                    pagefindClient = client;

                    return client;
                })
                .catch(error => {
                    pagefindPromise = null;
                    throw error;
                });
        }

        return pagefindPromise;
    }

    /**
     * Render the current query's results.
     * @param {string} query The visitor's search query.
     * @param {number} requestId The request generation used to ignore stale results.
     * @returns {Promise<void>} Resolves after the results are rendered.
     */
    async function renderSearchResults(query, requestId) {
        try {
            const client = await loadPagefind();
            const search = await client.search(query);

            if (requestId !== searchRequest) {
                return;
            }

            resultsList.replaceChildren();

            const resultData = await Promise.all(
                search.results.map(result => result.data())
            );

            if (requestId !== searchRequest) {
                return;
            }

            resultData.forEach(result => {
                const item = document.createElement("li");
                const link = document.createElement("a");
                const title = document.createElement("h3");
                const excerpt = document.createElement("p");

                link.href = result.url;
                title.textContent = result.meta.title || result.url;
                excerpt.textContent = result.plain_excerpt;
                link.append(title, excerpt);
                item.append(link);
                resultsList.append(item);
            });

            status.textContent = resultData.length === 0
                ? "Nessun risultato. Prova con altri termini."
                : `${resultData.length} ${resultData.length === 1 ? "risultato" : "risultati"} trovati.`;
        } catch {
            if (requestId === searchRequest) {
                resultsList.replaceChildren();
                status.textContent = "La ricerca sarà disponibile dopo la build del sito.";
            }
        }
    }

    /**
     * Open the search dialog and focus its input.
     * @returns {void}
     */
    function openSearch() {
        if (!dialog.open) {
            dialog.showModal();
        }

        input.focus();
    }

    toggle.addEventListener("click", openSearch);
    dialog.querySelector(".search-close")?.addEventListener("click", () => dialog.close());
    dialog.addEventListener("close", () => toggle.focus());
    dialog.addEventListener("click", event => {
        if (event.target === dialog) {
            dialog.close();
        }
    });
    input.addEventListener("input", () => {
        const query = input.value.trim();
        const requestId = ++searchRequest;

        window.clearTimeout(searchTimer);
        resultsList.replaceChildren();

        if (!query) {
            status.textContent = "Digita per cercare tra i contenuti del sito.";
            return;
        }

        status.textContent = "Ricerca in corso…";
        searchTimer = window.setTimeout(() => {
            void renderSearchResults(query, requestId);
        }, 120);
    });

    dialog.addEventListener("keydown", event => {
        if (event.target === input && event.key === "ArrowDown" && resultsList.firstElementChild) {
            event.preventDefault();

            /** @type {HTMLAnchorElement | null} */
            const firstResult = resultsList.querySelector("a");

            firstResult?.focus();
        }
    });

    resultsList.addEventListener("keydown", event => {
        if (!(event.target instanceof HTMLAnchorElement)) {
            return;
        }

        const resultLinks = [...resultsList.querySelectorAll("a")];
        const currentIndex = resultLinks.indexOf(event.target);

        if (event.key !== "ArrowDown" && event.key !== "ArrowUp") {
            return;
        }

        event.preventDefault();

        const nextIndex = event.key === "ArrowDown"
            ? Math.min(currentIndex + 1, resultLinks.length - 1)
            : currentIndex - 1;

        if (nextIndex < 0) {
            input.focus();
        } else {
            resultLinks[nextIndex]?.focus();
        }
    });

    document.addEventListener("keydown", event => {
        const target = event.target;
        const isEditing = target instanceof HTMLElement && (
            target.isContentEditable ||
            target instanceof HTMLInputElement ||
            target instanceof HTMLTextAreaElement ||
            target instanceof HTMLSelectElement
        );

        if (
            event.key.toLowerCase() === "k" &&
            (event.ctrlKey || event.metaKey) &&
            !event.altKey &&
            !event.shiftKey &&
            !isEditing
        ) {
            event.preventDefault();
            openSearch();
        }
    });
}
