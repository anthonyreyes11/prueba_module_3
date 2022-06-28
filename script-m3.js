// ETIQUETAS HTML
const squares = document.querySelectorAll(".square");
const h1 = document.querySelector("#colorDisplay");





// VARIABLES
//let colores = ["rgb(240, 14, 128)", "rgb(40, 164, 12)", "rgb(20, 114, 158)", "rgb(10, 14, 12)", "rgb(2, 194, 128)", "rgb(240, 149, 128)"];
const colores = generateRandomColors(6);

for (let i = 0; i < colores.length; i++) {
  squares[i].style.backgroundColor = colores[i];
}


// funciones
function pickColor() {
  return colores[Math.floor(colores.length * Math.random())]
};
const pickedColor = pickColor();


function generateRandomColors(num) {
  const arr = []
  for (i = 0; i < num; i++) {
    arr.push(randomColor())
  }
  return arr;
}

function randomColor() {
  const r = Math.floor(Math.random() * 256)
  const g = Math.floor(Math.random() * 256)
  const b = Math.floor(Math.random() * 256)
  return "rgb(" + r + ", " + g + ", " + b + ")";
}

h1.textContent = pickedColor;
h1.style.color = pickedColor;




