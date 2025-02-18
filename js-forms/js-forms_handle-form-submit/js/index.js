console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const inputData = Object.fromEntries(formData);

  const firstName = inputData.firstName;
  const lastName = inputData.lastName;
  const age = inputData.age;
  console.log(firstName, lastName, age);
  event.target.reset();
  event.target.elements.firstName.focus();
});
