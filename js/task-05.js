const textInput = document.querySelector("#name-input");
console.log(textInput);

const output = document.querySelector("#name-output");
const outputTextContent = output.textContent;
console.log(output);
console.log(outputTextContent);

textInput.addEventListener("input", changeText);

function changeText(evt) {
  if (evt.currentTarget.value.trim() != "") {
    output.textContent = evt.currentTarget.value;
  } else {
    output.textContent = outputTextContent;
  }
}
