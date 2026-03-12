const viewBtn = document.querySelector("#view-more");
const gridItems = document.querySelectorAll(".blog");

console.log("start")
viewBtn.addEventListener("click", () => {
    gridItems.forEach((gridItem, index) => {

        if (index >= 3) {
            gridItem.classList.toggle("expanded");
            console.log("done")
        };

        if (gridItem.classList.contains("expanded")) {
            viewBtn.textContent = "View Less";
        } else {
            viewBtn.textContent = "View More";
        };
                
    });

    
    
});

