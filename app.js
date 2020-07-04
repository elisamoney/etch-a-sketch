const gridContainer_div = document.getElementById("grid-container");

function makeGrid(x) {
    let userClick = false;
    for (i = 0; i < x**2; i++) {
        let newDiv = document.createElement("div");
        newDiv.classList.add("grid");
        // newDiv.innerHTML = i + 1;
        gridContainer_div.appendChild(newDiv);
        newDiv.addEventListener("mouseover", () => {
            newDiv.classList.add("hover");
        });
    }
}


makeGrid(16);