const updateTravelPost = async (event) => {
  event.preventDefault();

  const travelBtn = document.querySelector("#updateTrvlBtn");
  const travelId = travelBtn.getAttribute("data-id");

  const location = document.querySelector("#location").value;
  const budget = document.querySelector("#budget").value;
  const what_do = document.querySelector("#what-do").value;
  const starting_date = document.querySelector("#starting-date").value;
  const ending_date = document.querySelector("#ending-date").value;

  const response = await fetch("/api/travel/" + travelId, {
    method: "PUT",
    body: JSON.stringify({
      location,
      budget,
      what_do,
      starting_date,
      ending_date,
    }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert("Failed to update Travel information");
  }
};

const updateRecipePost = async (event) => {
  event.preventDefault();

  const recipeBtn = document.querySelector("#updateRecipeBtn");
  recipeId = recipeBtn.getAttribute("data-id");

  const name = document.querySelector("#name").value;
  const price = document.querySelector("#price").value;
  const link = document.querySelector("#link").value;

  const response = await fetch("/api/recipe/" + recipeId, {
    method: "PUT",
    body: JSON.stringify({
      name,
      price,
      link,
    }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert("Failed to update Recipe information");
  }
};

const updateExpPost = async (event) => {
  event.preventDefault();

  const expBtn = document.querySelector("#updateExpBtn");
  expId = expBtn.getAttribute("data-id");

  const what_do = document.querySelector("#what-do").value;
  const budget = document.querySelector("#budget").value;
  const rating = document.querySelector("#rating").value;

  const response = await fetch("/api/experience/" + expId, {
    method: "PUT",
    body: JSON.stringify({
      what_do,
      budget,
      rating,
    }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert("Failed to update Experience information");
  }
};

document
  .querySelector("#updateTrvlBtn")
  .addEventListener("click", updateTravelPost);

document
  .querySelector(".updateRecipeBtn")
  .addEventListener("click", updateRecipePost);

document
  .querySelector(".updateExpBtn")
  .addEventListener("click", updateExpPost);
