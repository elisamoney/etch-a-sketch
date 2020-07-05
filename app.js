const gridContainer_div = document.getElementById("grid-container");
const reset_btn = document.getElementById("reset");

let grids;

reset_btn.addEventListener("click", reset);


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
    grids = document.getElementsByClassName("grid");
}

function paint(a) {
    if (click === true) {
        let currGrid = document.getElementById(a);
        currGrid.classList.add("paint")
    }
}

function reset() {
    for (let i = 0; i < grids.length-1; i++) {
        grids[i].classList.remove("paint")
    }
    console.log("reset")
}

makeGrid(16);