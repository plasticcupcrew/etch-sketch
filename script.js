const container = document.querySelector(".container");
let row = document.createElement("div");
row.classList.add("row");

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

let grid = document.querySelectorAll(".box");
console.log(grid.length);