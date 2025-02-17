console.clear();

const boxElement = document.querySelector('[data-js = "box"]');
const colorInput = document.querySelector('[data-js = "input-color"]');
const radiusInput = document.querySelector('[data-js = "input-radius"]');
const rotationInput = document.querySelector('[data-js = "input-rotation"]');

colorInput.addEventListener("input", () => {
  //   console.log(colorInput.value);
  boxElement.style.backgroundColor = `hsl(${colorInput.value} 70 60)`;
});

radiusInput.addEventListener("input", () => {
  boxElement.style.borderRadius = `${radiusInput.value}px`;
});

rotationInput.addEventListener("input", () => {
  boxElement.style.transform = `rotate(${rotationInput.value}deg)`;
});
