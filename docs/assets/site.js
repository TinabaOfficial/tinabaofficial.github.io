const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".main-navigation");

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
