// ETIQUETAS HTML
const squares = document.querySelectorAll(".square");
const span = document.querySelector("#colorDisplay");
const resetButton = document.querySelector("#reset");
const easyBtn = document.querySelector("#easyBtn");
const hardBtn = document.querySelector("#hardBtn");




// VARIABLES
//let colores = ["rgb(240, 14, 128)", "rgb(40, 164, 12)", "rgb(20, 114, 158)", "rgb(10, 14, 12)", "rgb(2, 194, 128)", "rgb(240, 149, 128)"];
const colors = generateRandomColors(6);

  
function changeColors(colors){
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = colors;
  };
}

// funciones
function pickColor() {
  return colors[Math.floor(colors.length * Math.random())]
};
const pickedColor = pickColor();


function generateRandomColors(num) {
  const arr = []
  for (i = 0; i < num; i++) {
    arr.push(randomColor())
  }
  return arr;
};

for (let i = 0; i < colors.length; i++) {
  squares[i].style.backgroundColor = colors[i];

  squares[i].addEventListener("click", function() {
    let clickedColor = this.style['background-color'];
    
    if (clickedColor === pickedColor) {

      changeColors(clickedColor);
      span.style.background = clickedColor;
    }else{
      this.style.background = "#232323";
    }
  })
};

function randomColor() {
  const r = Math.floor(Math.random() * 256)
  const g = Math.floor(Math.random() * 256)
  const b = Math.floor(Math.random() * 256)
  return "rgb(" + r + ", " + g + ", " + b + ")";
};

span.textContent = pickedColor;
span.style.color = pickedColor;


