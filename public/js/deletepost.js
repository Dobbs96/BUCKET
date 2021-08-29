const handleRecipeDelete = async (event) => {
  event.preventDefault();
  const recipeBtn = document.querySelector("#recipedeletebutton");
  const recipeId = recipeBtn.getAttribute("data-id");
  console.log(recipeId);
  console.log("deletebutton");
  const response = await fetch("/api/recipe/" + recipeId, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert("Failed to delete Recipe information");
  }
};

document
  .querySelector("#recipedeletebutton")
  .addEventListener("click", handleRecipeDelete);

const handleExperienceDelete = async (event) => {
  event.preventDefault();
  const experienceBtn = document.querySelector("#experiencedeletebutton");
  const experienceId = experienceBtn.getAttribute("data-id");
  console.log(experienceId);
  console.log("deletebutton");
  const response = await fetch("/api/experience/" + experienceId, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert("Failed to delete Experience information");
  }
};

document
  .querySelector("#experiencedeletebutton")
  .addEventListener("click", handleExperienceDelete);

const handleTravelDelete = async (event) => {
  event.preventDefault();
  const travelBtn = document.querySelector("#traveldeletebutton");
  const travelId = travelBtn.getAttribute("data-id");
  console.log(travelId);
  console.log("deletebutton");
  const response = await fetch("/api/travel/" + travelId, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert("Failed to delete Travel information");
  }
};

document
  .querySelector("#traveldeletebutton")
  .addEventListener("click", handleTravelDelete);
