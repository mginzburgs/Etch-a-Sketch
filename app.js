const container = document.querySelector(".container");
const dialog = document.querySelector("dialog");
const body = document.querySelector(".main");
const dialogButton = document.querySelector(".dialog-button");

// ELEMENTS
function createSquareGrid(amount) {
  container.innerHTML = "";
  for (i = 0; i < amount; i++) {
    let div = document.createElement("div");
    div.classList.add("square");
    container.appendChild(div);
  }
}

function createGridButton() {
  let GridButton = document.createElement("button");
  GridButton.classList.add("new-grid-button");
  GridButton.innerText = "CREATE NEW GRID";
  GridButton.onclick = () => {
    dialog.show();
  };
  body.prepend(GridButton);
}

function handleSubmit() {
  let gridSize = document.querySelector("#grid-size-input").value;
  console.log(gridSize);
  if (gridSize <= 1000) {
    createSquareGrid(gridSize);
    dialog.close();
  }
}

dialogButton.addEventListener("click", handleSubmit);

// FUNCTIONS
function colorSquaresOnHover() {
  container.addEventListener("mouseover", (e) => {
    if (e.target.classList.contains("square")) {
      e.target.classList.toggle("square--on");
    }
  });
}

//APP
const buildApp = () => {
  createSquareGrid(256);
  colorSquaresOnHover();
  createGridButton();
};

buildApp();
