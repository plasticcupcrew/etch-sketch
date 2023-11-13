const container = document.querySelector(".container");

let row = document.createElement("div");
row.classList.add("row");

let grid = document.querySelectorAll(".box");
const btn = document.querySelector("button");

const input = document.querySelector("input");

btn.addEventListener('click', () => updateGrid());

for (let i = 1; i<=16; i++) {

    const div = document.createElement("div");
    div.classList.add("box");
    row.appendChild(div);

    if (i % 4 === 0) {
        container.appendChild(row);
        row = document.createElement("div");
        row.classList.add("row");
    }
}

for (let i = 0; i < grid.length; i++) {
    grid[i].addEventListener('mouseenter', () => grid[i].classList.add("colored"));
}

function updateGrid() {

    //remove existing grid
    removeGrid();

    //record number of boxes, max of 100
    let size = +input.value;
    if (size>100) {size = 100;}

    //identify number of columns
    let numCol = getNumCol(size);

    //create new grid.
    createGrid(numCol, size);

    //add event listeners to grid
    addBoxListeners();

}

function removeGrid() {
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
}

function getNumCol(size) {
    let numCol;
    if (Math.floor(Math.sqrt(size)) === Math.sqrt(size)) {
        numCol = Math.sqrt(size);
    } else {
        numCol = Math.floor(Math.sqrt(size)) + 1;
    }
    return numCol;
}

function createGrid(numCol, size) {
    let counter = 0;
    for (let i = 0; i < numCol; i++) {

        row = document.createElement("div");
        row.classList.add("row");

        for (let j = 0; j < numCol; j++) {
            const div = document.createElement("div");
            div.classList.add("box");
            row.appendChild(div);
            if (++counter === size) {break;}
        }

        container.appendChild(row);
        if (counter === size) {
            break;
        }
    }
}

function addBoxListeners() {
    let grid = document.querySelectorAll(".box");

    for (let i = 0; i < grid.length; i++) {
        grid[i].addEventListener('mouseenter', () => grid[i].classList.add("colored"));
    }
}
