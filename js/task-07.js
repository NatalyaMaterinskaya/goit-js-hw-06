const fontSizeControl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
console.dir(fontSizeControl);
console.dir(text);

fontSizeControl.addEventListener('input', (evt) => {
    text.style.fontSize = evt.currentTarget.value + "px";
});
