//первый вид решенияя на js

const board = document.querySelector("#board");
const SQUARES_NUMBER = 60;
const colors = [
  "#CC0099",
  "#9900FF",
  "#00CCFF",
  "#00CC00",
  "#CCFF33",
  "#990000",
  "#330000",
  "#9999FF",
  "#000033",
  "#006633",
];

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => setColor(square));

  square.addEventListener("mouseleave", () => removeColor(square));

  board.append(square);
}

function setColor(element) {
  const color = getRandomColor();
  element.style.backgroundColor = color;

  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
  element.style.backgroundColor = "#1d1d1d";
  element.style.boxShadow = "0 0 2px #000";
}

function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}
