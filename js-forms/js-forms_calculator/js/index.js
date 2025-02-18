console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let result;

  // --v-- write your code here --v--
  const form = new FormData(event.target);
  const inputData = Object.fromEntries(form);

  const inputA = Number(inputData.numberA);
  const inputB = Number(inputData.numberB);
  const inputOperator = inputData.operator;

  console.log(inputA, inputB, inputOperator);

  switch (inputOperator) {
    case "addition":
      result = add(inputA, inputB);
      break;
    case "subtraction":
      result = subtract(inputA, inputB);
      break;
    case "multiplication":
      result = multiply(inputA, inputB);
      break;
    case "division":
      result = divide(inputA, inputB);
      break;
  }

  // --^-- write your code here --^--

  resultOutput.textContent = result;
});
