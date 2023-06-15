const fontSizeRange = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
console.dir(fontSizeRange);
console.dir(text);

fontSizeRange.addEventListener("input", changeFontSize);

function changeFontSize(evt) {
  text.style.fontSize = evt.currentTarget.value + "px";
};
