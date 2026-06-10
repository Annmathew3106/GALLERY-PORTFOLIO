document.addEventListener("DOMContentLoaded", () => {
    const scrollUpButton = document.querySelector(".scrollup");

    document.querySelectorAll(".filter").forEach((filterGroup) => {
        const filterButtons = filterGroup.querySelectorAll(".filter-btn");
        const section = filterGroup.closest("section");
        const projectCards = section?.querySelectorAll(".recent-box, .gallery-box") ?? [];

        const showCards = (type) => {
            projectCards.forEach((card) => {
                const cardType = card.querySelector(".type")?.dataset.type?.toLowerCase();
                const isVisible = type === "all" || cardType === type;
                card.style.display = isVisible ? "" : "none";
            });
        };

        filterButtons.forEach((button) => {
            button.addEventListener("click", () => {
                const type = button.textContent.trim().toLowerCase();
                showCards(type);
            });
        });
    });

    if (scrollUpButton) {
        scrollUpButton.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }
});
