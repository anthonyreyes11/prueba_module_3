// ETIQUETAS HTML
const squares = document.querySelectorAll(".square");

const h1 = document.querySelector("#colorDisplay");

const square = 6;

const rgbCode = document.getElementById("rgbCode");



// VARIABLES
let colores = ["rgb(240, 14, 128)", "rgb(40, 164, 12)", "rgb(20, 114, 158)", "rgb(10, 14, 12)", "rgb(2, 194, 128)", "rgb(240, 149, 128)"]

for (let i = 0; i < colores.length; i++) {
  squares[i].style.backgroundColor = colores[i];
}



// funciones
function pickColor() {
  return colores[Math.floor(colores.length * Math.random())]
}
const pickedColor = pickColor();


function generateRandomColors(num) {
  const arr = []
  for (var i = 0; i < num; i++) {
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

easyBtn.addEventListener("click", function () {
  console.log('funcionando')
})

hardBtn.addEventListener("click", function () {
  console.log('funcionando')
})

reset.addEventListener("click", function () {
  console.log('funcionando')
})


for (let i = 0; i < square.length; i++) {
  square.addEventListener("click", function () {
    console.log('funcionando')
  }
  )
}

