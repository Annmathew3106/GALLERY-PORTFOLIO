document.addEventListener("DOMContentLoaded", () => {
    const scrollUpButton = document.querySelector(".scrollup");
    const galleryCountNumber = document.querySelector(".gallery-count .count-number");

    document.querySelectorAll(".filter").forEach((filterGroup) => {
        const filterButtons = filterGroup.querySelectorAll(".filter-btn");
        const section = filterGroup.closest("section");
        const projectCards = section?.querySelectorAll(".recent-box, .gallery-box") ?? [];
        const sectionCountNumber = section?.querySelector(".gallery-count .count-number");

        const showCards = (type) => {
            let visibleCount = 0;

            projectCards.forEach((card) => {
                const cardType = card.querySelector(".type")?.dataset.type?.toLowerCase();
                const isVisible = type === "all" || cardType === type;
                card.style.display = isVisible ? "" : "none";
                if (isVisible) {
                    visibleCount += 1;
                }
            });

            if (sectionCountNumber) {
                sectionCountNumber.textContent = visibleCount;
            }
        };

        filterButtons.forEach((button) => {
            button.addEventListener("click", () => {
                const type = button.textContent.trim().toLowerCase();
                showCards(type);
            });
        });

        showCards("all");
    });

    if (galleryCountNumber) {
        galleryCountNumber.textContent = document
            .querySelectorAll("#gallery .recent-box, #gallery .gallery-box").length;
    }

    if (scrollUpButton) {
        scrollUpButton.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }
});
