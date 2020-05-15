const button = document.querySelector("button");
const body = document.querySelector("body");
const color = ["red", "green", "blue", "yellow", "black", "pink", "purple"];

body.style.backgroundColor = "violet";
button.addEventListener("click", changeBackgroundColor);

function changeBackgroundColor() {
  const indexColor = parseInt(Math.random() * color.length);
  body.style.backgroundColor = color[indexColor];
}
