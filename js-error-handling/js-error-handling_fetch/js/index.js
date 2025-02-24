console.clear();

const actionsElement = document.querySelector("[data-js='actions']");
const userElement = document.querySelector("[data-js='user']");
const errorElement = document.querySelector("[data-js='error']");

async function fetchUserData(url) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(response.status);
    }
    console.log(response.headers.get("content-type"));

    if (response.headers.get("content-type") !== "application/json") {
      console.log("Hier isser!");
      throw new Error(4711);
    }

    return await response.json();
  } catch (error) {
    return { error: error.message };
  }
}

const endpoints = [
  { name: "User 1", url: "https://reqres.in/api/users/1" },
  { name: "User 2", url: "https://reqres.in/api/users/2" },
  { name: "User 99", url: "https://reqres.in/api/users/99" },
  { name: "Invalid API link", url: "https://reqres.in" },
];

endpoints.forEach((endpoint) => {
  const button = document.createElement("button");
  button.textContent = endpoint.name;
  actionsElement.append(button);

  button.addEventListener("click", async () => {
    const result = await fetchUserData(endpoint.url);

    if (result.error) {
      handleError(result);
      // console.log(result.error);
      // errorElement.textContent = result.error;
      // if (result.error == 404) {
      //   userElement.innerHTML = `Status ${result.error}: No user data available.`;
      // } else if (result.error == 4711) {
      //   userElement.innerHTML = `There seems to be an error in the API. The type of returned data is abnormal!`;
      // } else {
      //   userElement.innerHTML =
      //     "Something else went wrong. But I do not know exactly what";
      // }
    } else {
      const user = result.data;
      userElement.innerHTML = `
      <img alt="${user.first_name} ${user.last_name}" src="${user.avatar}" class="user__image"/>
      <h2>${user.first_name} ${user.last_name}</h2>
      `;
      errorElement.textContent = "";
    }
  });
});

function handleError(error) {
  console.log(error.error);
  errorElement.textContent = error.error;
  if (error.error == 404) {
    userElement.innerHTML = `Status ${error.error}: No user data available.`;
  } else if (error.error == 4711) {
    userElement.innerHTML = `There seems to be an error in the API. The type of returned data is abnormal!`;
  } else {
    userElement.innerHTML =
      "Something else went wrong. But I do not know exactly what";
  }
}
