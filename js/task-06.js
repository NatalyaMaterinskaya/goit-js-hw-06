const symbolInput = document.querySelector("#validation-input");
console.dir(symbolInput);

symbolInput.addEventListener("blur", count);
  
  
  function count(evt)  {
    if (evt.currentTarget.value.trim().length === Number(symbolInput.dataset.length)) {
    symbolInput.classList.remove("invalid");
    symbolInput.classList.add("valid");
  } else {
    symbolInput.classList.remove("valid");
    symbolInput.classList.add("invalid");
  }
};
