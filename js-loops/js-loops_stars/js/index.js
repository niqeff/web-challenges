console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars(filledStars) {
  // Reset the star container before re-rendering stars
  starContainer.innerHTML = "";

  // --v-- write or modify code below this line --v--
  for (let i = 1; i <= 5; i++) {
    const starElem = document.createElement("img");
    if (i <= filledStars) {
      starElem.setAttribute("src", "assets/star-filled.svg");
    } else {
      starElem.setAttribute("src", "assets/star-empty.svg");
    }
    starContainer.append(starElem);
  }
  // --^-- write or modify code above this line --^--
}

renderStars();
