let travelDataIdBtn;
let recipeDataIdBtn;
let experienceDataIdBtn;

//Handle Travel Button
function deleteTrvlBtnHandlebarsHandler(event) {
  event.preventDefault();
  console.log("inside deletePost.js ..deleteTrvlBtnHandlebarsHandler --------");
  console.log(event.target);
  if (event.target.innerHTML === "Delete") {
    console.log("Travel button clicked is Delete!");
    const travelId = event.target.getAttribute("data-id");
    console.log(travelId);

    const response = fetch("/api/travel/" + travelId, {
      method: "DELETE",
      // headers: { "Content-Type": "application/json" },
    });
    console.log(response);
    document.location.replace("/dashboard");
    // if (response.ok) {
    //   document.location.replace("/dashboard");
    // } else {
    //   alert("Failed to delete Travel information");
    // }
  }
  if (event.target.innerHTML === "Update") {
    travelDataIdBtn = event.target.getAttribute("data-id");

    const travelDataLocationBtn = event.target.getAttribute("data-location");
    const travelDataBudgetBtn = event.target.getAttribute("data-budget");
    const travelDataStartingDateBtn =
      event.target.getAttribute("data-startingDate");
    const travelDataEndingDateBtn =
      event.target.getAttribute("data-endingDate");
    const travelDataWhatDoBtn = event.target.getAttribute("data-whatdo");
  }
}

//Handle Recipe Button
function deleteRecipeBtnHandlebarsHandler(event) {
  event.preventDefault();

  if (event.target.innerHTML === "Delete") {
    const recipeId = event.target.getAttribute("data-id");

    const response = fetch("/api/recipe/" + recipeId, {
      method: "DELETE",
    });
    document.location.replace("/dashboard");
  }
  if (event.target.innerHTML === "Update") {
    recipeDataIdBtn = event.target.getAttribute("data-id");

    const recipeDataNameBtn = event.target.getAttribute("data-name");
    const recipeDataPriceBtn = event.target.getAttribute("data-price");
    const recipeDataLinkBtn = event.target.getAttribute("data-link");
  }
}

//Handle Experience Button
function deleteExperienceBtnHandlebarsHandler(event) {
  event.preventDefault();
  if (event.target.innerHTML === "Delete") {
    const experienceId = event.target.getAttribute("data-id");

    const response = fetch("/api/experience/" + experienceId, {
      method: "DELETE",
    });
    document.location.replace("/dashboard");
  }
  if (event.target.innerHTML === "Update") {
    experienceDataIdBtn = event.target.getAttribute("data-id");

    const expDataWhatDoBtn = event.target.getAttribute("data-whatdo");
    const expDataBudgetBtn = event.target.getAttribute("data-budget");
    const expDataRatingBtn = event.target.getAttribute("data-rating");
  }
}

function updatingTravel(event) {
  let locationModalData = document.querySelector("#location").value;
  let budgetModalData = document.querySelector("#budget").value;
  let startingDateModalData = document.querySelector("#starting-date").value;
  let endingDateModalData = document.querySelector("#ending-date").value;
  let whatDoModalData = document.querySelector("#what-do").value;

  const response = fetch("/api/travel/" + travelDataIdBtn, {
    method: "PUT",
    body: JSON.stringify({
      locationModalData,
      budgetModalData,
      whatDoModalData,
      startingDateModalData,
      endingDateModalData,
    }),
    headers: { "Content-Type": "application/json" },
  });
  document.location.replace("/dashboard");
}

function updatingRecipe(event) {
  let nameModalData = document.querySelector("#name").value;
  let priceModalData = document.querySelector("#price").value;
  let linkModalData = document.querySelector("#link").value;

  const response = fetch("/api/recipe/" + recipeDataIdBtn, {
    method: "PUT",
    body: JSON.stringify({
      nameModalData,
      priceModalData,
      linkModalData,
    }),
    headers: { "Content-Type": "application/json" },
  });
  document.location.replace("/dashboard");
}

function updatingExperience(event) {
  let whatDoModalData = document.querySelector("#what-do").value;
  let budgetModalData = document.querySelector("#budget").value;
  let ratingModalData = document.querySelector("#rating").value;

  const response = fetch("/api/experience/" + experienceDataIdBtn, {
    method: "PUT",
    body: JSON.stringify({
      whatDoModalData,
      budgetModalData,
      ratingModalData,
    }),
    headers: { "Content-Type": "application/json" },
  });
  document.location.replace("/dashboard");
}

document
  .querySelector(".testContainerTravel")
  .addEventListener("click", deleteTrvlBtnHandlebarsHandler);

document
  .querySelector(".testContainerRecipe")
  .addEventListener("click", deleteRecipeBtnHandlebarsHandler);

document
  .querySelector(".testContainerExperience")
  .addEventListener("click", deleteExperienceBtnHandlebarsHandler);

document
  .querySelector("#modaleUpdateTrvlBtn")
  .addEventListener("click", updatingTravel);

document
  .querySelector("#updateRecipeBtn")
  .addEventListener("click", updatingRecipe);

document
  .querySelector("#updateExpBtn")
  .addEventListener("click", updatingExperience);
