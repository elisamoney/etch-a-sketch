const gridContainer_div = document.getElementById("grid-container");

let click = false;

function makeGrid(x) {
    for (i = 0; i < x**2; i++) {
        let newDiv = document.createElement("div");
        newDiv.classList.add("grid");
        newDiv.id = i + 1;
        gridContainer_div.addEventListener("mousedown", () => {click = true});
        gridContainer_div.addEventListener("mouseup", () => {click = false});
        newDiv.addEventListener("mouseover", () => paint(newDiv.id));
        // newDiv.innerHTML = i + 1;
        gridContainer_div.appendChild(newDiv);
    }
}

function paint(a) {
    if (click === true) {
        let currGrid = document.getElementById(a);
        currGrid.classList.add("paint")
    }
}

makeGrid(16);