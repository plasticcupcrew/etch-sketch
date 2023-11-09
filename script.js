const container = document.querySelector(".container");
let row = document.createElement("div");

for (let i = 1; i<=16; i++) {

    const div = document.createElement("div");
    div.classList.add("box");
    container.appendChild(div);

}

let grid = document.querySelectorAll(".box");

for (let i = 0; i < grid.length; i++) {
    grid[i].addEventListener('mouseenter', () => grid[i].classList.add("colored"));
}

const btn = document.querySelector("button");
const input = document.querySelector("input");

btn.addEventListener('click', () => createGrid());

let newBox;

function createGrid() {

    //remove existing grid
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }

    //record number of boxes
    let size = +input.value;
    if (size>100) {size = 100;}

    //create counter to keep track of how many boxes we have
    let counter = 0;

    for (let i = 0; i < size; i++) {
        if (counter === size) {
            break;
        }
        newBox = document.createElement("div");
        newBox.classList.add("box");
        container.appendChild(newBox);
        counter++;
    }
}
