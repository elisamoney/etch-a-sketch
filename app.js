const gridContainer_div = document.getElementById("grid-container");
const reset_btn = document.getElementById("reset");
const canvas_btn = document.getElementById("canvas");
const startPrompt_p = document.getElementById("start-prompt");

let click = false;
let grids;
let newSize;

reset_btn.addEventListener("click", reset);
canvas.addEventListener("click", getCanvas);

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
    grids = document.getElementsByClassName("grid");
    startPrompt_p.remove();
    gridContainer_div.style.gridTemplateColumns = `repeat(${x}, 1fr)`
}

function paint(a) {
    if (click === true) {
        let currGrid = document.getElementById(a);
        currGrid.classList.add("paint")
    }
}

function reset() {
    for (let i = 0; i < grids.length-1; i++) {
        grids[i].classList.remove("paint");
    }
}

function getCanvas() {
    newSize = Number(prompt("What size grid?", ""));
    while (!newSize && newSize != "") {
        newSize = Number(prompt("Please enter a valid number.", ""));
    }
    makeGrid(newSize);
}