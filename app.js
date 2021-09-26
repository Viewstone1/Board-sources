//второй вид решения

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

  square.addEventListener("mouseover", setColor);

  square.addEventListener("mouseleave", removeColor);

  board.append(square);
}

function setColor(event) {
  const element = event.target;
  const color = getRandomColor();
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(event) {
  const element = event.target;
  element.style.backgroundColor = "#1d1d1d";
  element.style.boxShadow = "0 0 2px #000";
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
