const updateTravelFormHandler = async (event) => {
  event.preventDefault();
  console.log("update travel button clicked");

  const location = document.querySelector("#location").value.trim();
  const budget = document.querySelector("#budget").value.trim();
  const what_do = document.querySelector("#what_do").value.trim();
  const starting_date = document.querySelector("#starting_date").value.trim();
  const ending_date = document.querySelector("#ending_date").value.trim();

  if (location && budget && what_do && starting_date && ending_date) {
    const response = await fetch("/api/travel/:" + travelId, {
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
      document.location.replace("/");
    } else {
      alert("Failed to update Travel information");
    }
  }
};

const updateRecipeFormHandler = async (event) => {
  event.preventDefault();
  console.log("update recipe button clicked");
};

const updateExperienceFormHandler = async (event) => {
  event.preventDefault();
  console.log("update experience button clicked");
};

document
  .querySelector(".travel-card-container")
  .addEventListener("click", updateTravelFormHandler);

document
  .querySelector(".recipe-card-container")
  .addEventListener("click", updateRecipeFormHandler);

document
  .querySelector(".experience-card-container")
  .addEventListener("click", updateExperienceFormHandler);
