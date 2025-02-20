console.clear();

const mainElement = document.querySelector('[data-js="main"]');

const ol = document.createElement("ol");
mainElement.append(ol);

const programmingLanguages = [
  "JavaScript",
  "Python",
  "Java",
  "C#",
  "C++",
  "PHP",
  "Ruby",
];

// --v-- write or modify code below this line --v--

for (const pL of programmingLanguages) {
  const pLElement = document.createElement("li");
  pLElement.textContent = pL;
  ol.append(pLElement);
}

// --^-- write or modify code above this line --^--
