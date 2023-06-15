function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const widget = document.querySelector(".widget");
console.dir(widget);
const body = widget.parentElement;
const color = widget.firstElementChild.firstElementChild;
const btn = widget.lastElementChild;
btn.addEventListener("click", changeColor);

function changeColor() {
  const currentColor = getRandomHexColor();
  body.style.backgroundColor = currentColor;
  color.textContent = currentColor;
};

