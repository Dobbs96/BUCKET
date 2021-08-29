let locationInfo;
let budgetInfo;
let what_doInfo;
let starting_dateInfo;
let ending_dateInfo;

const submitPut = async (event) => {
  event.preventDefault();

  const travelBtn = document.querySelector("#updateTrvlBtn");
  travelId = travelBtn.getAttribute("data-id");

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

const updateRecipeFormHandler = async (event) => {
  event.preventDefault();
  console.log("update recipe button clicked");
};

const updateExperienceFormHandler = async (event) => {
  event.preventDefault();
  console.log("update experience button clicked");
};

document.querySelector("#updateTrvlBtn").addEventListener("click", submitPut);

document
  .querySelector(".recipe-card-container")
  .addEventListener("click", updateRecipeFormHandler);

document
  .querySelector(".experience-card-container")
  .addEventListener("click", updateExperienceFormHandler);
