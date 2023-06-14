const counter = document.querySelector("#counter");
console.dir(counter);

const decrementBtn = counter.firstElementChild.addEventListener(
  "click",
  calculate
);
const incrementBtn = counter.lastElementChild.addEventListener(
  "click",
  calculate
);

let counterValue = 0;

function calculate(evt) {
  console.log(evt);
  if (evt.currentTarget.dataset.action === "decrement") {
    counterValue -= 1;
  } else {
    counterValue += 1;
  }
  counter.firstElementChild.nextElementSibling.textContent = counterValue;
}
