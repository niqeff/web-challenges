console.clear();

let operand1 = 12;
const operand2 = 4;

// ----- Mathematical Operations -----

// Step 1: Use `document.querySelector` to select each button by its `data-js` attribute.

// --v-- write your code here --v--
const buttonAdd = document.querySelector('[data-js="add"]');
const buttonSubtract = document.querySelector('[data-js="subtract"]');
const buttonMultiply = document.querySelector('[data-js="multiply"]');
const buttonDivide = document.querySelector('[data-js="divide"]');
const buttonExponent = document.querySelector('[data-js="exponent"]');
const buttonModulo = document.querySelector('[data-js="modulo"]');

// --^-- write your code here --^--

/* 
Step 2: Add event listeners for each mathematical operation:

For each operation (add, subtract, multiply, divide, exponent, and modulo):
1. Add an event listener to the corresponding button.
2. Within the event listener, perform the operation using `operand1` and `operand2`.
3. Store the result in a variable.
4. Log the result to the console.
*/

// --v-- write your code here --v--

buttonAdd.addEventListener("click", () => {
  console.log(operand1 + operand2);
});

buttonSubtract.addEventListener("click", () => {
  console.log(operand1 - operand2);
});

buttonMultiply.addEventListener("click", () => {
  console.log(operand1 * operand2);
});

buttonDivide.addEventListener("click", () => {
  console.log(operand1 / operand2);
});

buttonExponent.addEventListener("click", () => {
  console.log(operand1 ** operand2);
});

buttonModulo.addEventListener("click", () => {
  console.log(operand1 % operand2);
});

// --^-- write your code here --^--

// ----- Update the First Operand -----

/*
In the following section, update the value of `operand1` using the buttons in the "Update the First Operand" section.
Each button should adjust the value of `operand1` and log the new value to the console.

Hint: To allow `operand1` to be updated, you might need to change its declaration.

Step 1: Select each button for updating `operand1` by its `data-js` attribute.
Step 2: Add event listeners to update `operand1` based on the button clicked. Log the updated value to the console.
*/

// --v-- write your code here --v--

const buttonIncrease1 = document.querySelector('[data-js="increase-by-one"]');
const buttonIncrease5 = document.querySelector('[data-js="increase-by-five"]');
const buttonDecrease1 = document.querySelector('[data-js="decrease-by-one"]');
const buttonDecrease5 = document.querySelector('[data-js="decrease-by-five"]');
const buttonMultiply2 = document.querySelector('[data-js="multiply-by-two"]');
const buttonDivide2 = document.querySelector('[data-js="divide-by-two"]');

buttonIncrease1.addEventListener("click", () => {
  console.log((operand1 += 1));
});

buttonIncrease5.addEventListener("click", () => {
  console.log((operand1 += 5));
});

buttonDecrease1.addEventListener("click", () => {
  console.log((operand1 -= 1));
});

buttonDecrease5.addEventListener("click", () => {
  console.log((operand1 -= 5));
});

buttonMultiply2.addEventListener("click", () => {
  console.log((operand1 = operand1 * 2));
});
buttonDivide2.addEventListener("click", () => {
  console.log((operand1 = operand1 / 2));
});
// --^-- write your code here --^--
