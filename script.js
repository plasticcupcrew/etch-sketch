const container = document.querySelector(".container");

let row = document.createElement("div");
row.classList.add("row");

const btn = document.querySelector("button");
const input = document.querySelector("input");

btn.addEventListener('click', () => updateGrid());

//create defualt grid
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

//add box listeners for default grid
addBoxListeners();

function updateGrid() {
    removeGrid();

    let size = +input.value;
    if (size>100) {size = 100;}

    let numCol = getNumCol(size);
    createGrid(numCol, size);
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
        grid[i].addEventListener('mouseenter', adjustColor);
    }
}

function getRandomColor() {
    let randomColor; 
    return randomColor = "#" +
    Math.floor(Math.random()*16777215).toString(16);
}

function adjustColor(e) {
    e = e.target;
    if (!e.classList.contains("colored")) {
        e.classList.add("colored");
        e.style.backgroundColor = getRandomColor();
        e.style.opacity = 0.1;
    } else if (+e.style.opacity < 1) {
        let opacity = +e.style.opacity
        e.style.opacity = opacity + .1;
    }
}
