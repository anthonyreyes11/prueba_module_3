// ETIQUETAS HTML
let numberOfSquares = 6;
let colors = generateRandomColors(numberOfSquares);
const squares = document.querySelectorAll(".square");
let span = document.querySelector("#colorDisplay");
let resetButton = document.querySelector("#reset");
let easyBtn = document.querySelector("#easyBtn");
let hardBtn = document.querySelector("#hardBtn");
let messageDisplay = document.querySelector(".message");
let pickedColor = pickColor();
span.textContent = pickedColor;
let h1 = document.querySelector('h1');

// Orden de ejercicio - Botones -> Funciones -> For

//BOTONES 

//Boton Easy
easyBtn.addEventListener('click', function () {
  easyBtn.classList.add('selected');
  hardBtn.classList.remove('selected');
  numberOfSquares = 3;
  colors = generateRandomColors(numberOfSquares);
  pickedColor = pickColor();
  span.innerHTML = pickedColor;
  for (let i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.background = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
})
//Boton Hard
hardBtn.addEventListener('click', function () {
  hardBtn.classList.add('selected');
  easyBtn.classList.remove('selected');
  numberOfSquares = 6;
  colors = generateRandomColors(numberOfSquares);
  pickedColor = pickColor();
  span.innerHTML = pickedColor;
  for (let i = 0; i < squares.length; i++) {

    squares[i].style.background = colors[i];

    squares[i].style.display = "block";

  }
})

//Boton Reset
resetButton.addEventListener("click", function () {
  location.reload();
});


//Funciones
function changeColors(color) {
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.background = color;
  };
}

function pickColor() {
  return colors[Math.floor(colors.length * Math.random())]
};

//GENERANDO COLOR ALEATORIO
function generateRandomColors(numberOfSquares) {
  let colors = []
  for (i = 0; i < numberOfSquares; i++) {
    colors.push(randomColor())
  }
  return colors;
};

function randomColor() {
  const r = Math.floor(Math.random() * 256)
  const g = Math.floor(Math.random() * 256)
  const b = Math.floor(Math.random() * 256)
  return "rgb(" + r + ", " + g + ", " + b + ")";
};

//Comienzo ciclos FOR LOOP 
for (let i = 0; i < numberOfSquares; i++) {
  if (colors[i]) {
    squares[i].style.background = colors[i];
  } else {
    squares[i].style.display = "none";
  }
};

for (let i = 0; i < colors.length; i++) {
  squares[i].style.backgroundColor = colors[i];

  squares[i].addEventListener("click", function () {
    let clickedColor = this.style['background-color'];

    if (clickedColor === pickedColor) {

      changeColors(clickedColor);
      h1.style.color = clickedColor;
      messageDisplay.textContent = "Correcto!";
      resetButton.textContent = "Play Again?"
    } else {
      this.style.background = "#232323";
      messageDisplay.textContent = "Intentalo de nuevo!";
    }
  })
};