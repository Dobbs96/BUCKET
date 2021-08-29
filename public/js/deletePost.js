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
}

//Handle Recipe Button
function deleteRecipeBtnHandlebarsHandler(event) {
  event.preventDefault();
  console.log(
    "inside deletePost.js ..deleteRecipeBtnHandlebarsHandler --------"
  );
  console.log(event.target);
  if (event.target.innerHTML === "Delete") {
    console.log("Recipe button clicked is Delete!");
    const recipeId = event.target.getAttribute("data-id");
    console.log(recipeId);

    const response = fetch("/api/recipe/" + recipeId, {
      method: "DELETE",
      // headers: { "Content-Type": "application/json" },
    });
    console.log(response);
    document.location.replace("/dashboard");
    // if (response.ok) {
    //   document.location.replace("/dashboard");
    // } else {
    //   alert("Failed to delete Recipe information");
    // }
  }
}

//Handle Experience Button
function deleteExperienceBtnHandlebarsHandler(event) {
  event.preventDefault();
  console.log(
    "inside deletePost.js ..deleteExperienceBtnHandlebarsHandler --------"
  );
  console.log(event.target);
  if (event.target.innerHTML === "Delete") {
    console.log("Experience button clicked is Delete!");
    const experienceId = event.target.getAttribute("data-id");
    console.log(experienceId);

    const response = fetch("/api/experience/" + experienceId, {
      method: "DELETE",
      // headers: { "Content-Type": "application/json" },
    });
    console.log(response);
    document.location.replace("/dashboard");
    // if (response.ok) {
    //   document.location.replace("/dashboard");
    // } else {
    //   alert("Failed to delete Experience information");
    // }
  }
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
