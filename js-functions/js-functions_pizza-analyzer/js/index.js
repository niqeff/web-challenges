console.clear();

const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');

const output = document.querySelector('[data-js="output"]');

pizzaInput1.addEventListener("input", () => {
  updatePizzaDisplay(pizza1, pizzaInput1.value);
  evalInput();
});

pizzaInput2.addEventListener("input", () => {
  updatePizzaDisplay(pizza2, pizzaInput2.value);
  evalInput();
});

// Task 1: Define the function `calculatePizzaGain` here

function calculatePizzaGain(diam1, diam2) {
  const area1 = Math.PI * (diam1 / 2) ** 2;
  const area2 = Math.PI * (diam2 / 2) ** 2;
  pizzaGain = Math.round(((area2 - area1) / area1) * 100);
  return pizzaGain;
}

function evalInput() {
  pizzaSize1 = pizzaInput1.value;
  pizzaSize2 = pizzaInput2.value;
  const pizzaGainResult = calculatePizzaGain(pizzaSize1, pizzaSize2);
  output.textContent = pizzaGainResult;
}

// Task 2: Define the function `updatePizzaDisplay` here

function updatePizzaDisplay(pizzaElement, newSize) {
  console.log("ElemId -> " + pizzaElement + " -- Val -> " + newSize);
  const newDisplaySize = (newSize / 24) * 100;
  const newDisplaySizeValue = newDisplaySize + "px";
  console.log("resulting in new display size: " + newDisplaySizeValue);
  pizzaElement.style.width = newDisplaySizeValue;
}

// Task 3: Define the function `updateOutputColor` here
