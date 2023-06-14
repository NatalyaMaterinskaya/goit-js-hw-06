const textInput = document.querySelector('#name-input');
console.log(textInput);

const output = document.querySelector("#name-output");
const outputTextContent = output.textContent;
console.log(output);
console.log(outputTextContent);

textInput.addEventListener("input", (evt) => {
    if (evt.currentTarget.value != "") {
        output.textContent = evt.currentTarget.value;
    }
    else {
        output.textContent = outputTextContent;
    }
});