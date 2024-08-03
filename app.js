let container = document.querySelector(".container");

// ELEMENTS
function createSquareGrid(amount) {
  for (i = 0; i < amount; i++) {
    let div = document.createElement("div");
    div.classList.add("square");
    container.appendChild(div);
  }
}

// FUNCTIONS
function colorSquaresOnHover() {
  container.addEventListener("mouseover", (e) => {
    e.target.classList.toggle("square--on");
  });
}

//APP
const buildApp = () => {
  createSquareGrid(256);
  colorSquaresOnHover();
};

buildApp();
