console.clear();

const url = "https://swapi.py4e.com/api/people";

async function fetchData() {
  const response = await fetch(url);
  const starWarsData = await response.json();
  console.log(starWarsData);
  const results = starWarsData.results;
  const eyeColor = results[2].eye_color;
  console.log(eyeColor);
}

fetchData();
