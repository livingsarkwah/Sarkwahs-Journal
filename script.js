const viewBtn = document.querySelector("#view-more");
const gridItems = document.querySelectorAll(".blog");

viewBtn.addEventListener("click", () => {
    gridItems.forEach((gridItem, index) => {
        if (index >= 3) {
            gridItem.classList.toggle("expanded");
        };
    });

    const isExpanded = gridItems[3].classList.contains("expanded");
    viewBtn.textContent = isExpanded ? "View Less" : "View More";
});

