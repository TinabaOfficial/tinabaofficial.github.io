const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".main-navigation");

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
