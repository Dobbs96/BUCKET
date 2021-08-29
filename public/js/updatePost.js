let locationInfo;
let budgetInfo;
let what_doInfo;
let starting_dateInfo;
let ending_dateInfo;

const updateTravelFormHandler = async (event) => {
  event.preventDefault();
  console.log("modal triggered");
  const travelBtn = document.querySelector("#updateTravelBtn");
  const travelId = travelBtn.getAttribute("data-id");
  console.log(travelId);

  M.updateTextFields();

  const locationEl = document.querySelector("#location");
  locationInfo = locationEl.getAttribute("data-location");
  if (!locationEl.value) {
    locationEl.value = locationInfo;
    M.updateTextFields();
  }
  console.log(locationEl.value);

  const budgetEl = document.querySelector("#budget");
  budgetInfo = budgetEl.getAttribute("data-budget");
  if (!budgetEl.value) {
    budgetEl.value = budgetInfo;
    M.updateTextFields();
  }
  console.log(budgetEl.value);

  const what_doEl = document.querySelector("#what-do");
  what_doInfo = what_doEl.getAttribute("data-whatdo");
  if (!what_doEl.value) {
    what_doEl.value = what_doInfo;
    M.updateTextFields();
  }
  console.log(what_doEl.value);

  const starting_dateEl = document.querySelector("#starting-date");
  starting_dateInfo = starting_dateEl.getAttribute("data-starting-date");
  if (!starting_dateEl.value) {
    starting_dateEl.value = starting_dateInfo;
    M.updateTextFields();
  }
  console.log(starting_dateEl.value);

  const ending_dateEl = document.querySelector("#ending-date");
  ending_dateInfo = ending_dateEl.getAttribute("data-ending-date");
  if (!ending_dateEl.value) {
    ending_dateEl.value = ending_dateInfo;
    M.updateTextFields();
  }
  console.log(ending_dateEl.value);

  if (
    locationEl.value &&
    budgetEl.value &&
    what_doEl.value &&
    starting_dateEl.value &&
    ending_dateEl.value
  ) {
    const response = await fetch("/api/travel/" + travelId, {
      method: "PUT",
      body: JSON.stringify({
        location: locationEl.value,
        budget: budgetEl.value,
        what_do: what_doEl.value,
        starting_date: starting_dateEl.value,
        ending_date: ending_dateEl.value,
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

const updateTravelFormSubmission = async (event) => {
  console.log("inside fetch submission: -----------");
  console.log(locationInfo.value);
  console.log(budgetInfo);
  console.log(what_doInfo);
  console.log(starting_dateInfo);
  console.log(ending_dateInfo);
  // if (location && budget && what_do && starting_date && ending_date) {
  //   const response = await fetch("/api/travel/" + travelId, {
  //     method: "PUT",
  //     body: JSON.stringify({
  //       location,
  //       budget,
  //       what_do,
  //       starting_date,
  //       ending_date,
  //     }),
  //     headers: { "Content-Type": "application/json" },
  //   });

  //   if (response.ok) {
  //     document.location.replace("/");
  //   } else {
  //     alert("Failed to update Travel information");
  //   }
  // }
};

const updateRecipeFormHandler = async (event) => {
  event.preventDefault();
  console.log("update recipe button clicked");
};

const updateExperienceFormHandler = async (event) => {
  event.preventDefault();
  console.log("update experience button clicked");
};

// document
//   .querySelector(".travel-card-container")
//   .addEventListener("click", updateTravelFormHandler);

document
  .querySelector("#updateTravelBtn")
  .addEventListener("submit", updateTravelFormSubmission);

document
  .querySelector(".recipe-card-container")
  .addEventListener("click", updateRecipeFormHandler);

document
  .querySelector(".experience-card-container")
  .addEventListener("click", updateExperienceFormHandler);
