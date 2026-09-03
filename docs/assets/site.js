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
