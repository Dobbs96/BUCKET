function updateTravelBtnHandlebarsHandler(event) {
  event.preventDefault();
  console.log("inside updateTravelBtnHandlebarsHandler --------");
  console.log(event.target);
  if (event.target.innerHTML === "Update") {
    console.log("Travel button clicked is Update one!");

    const travelDataLocation = event.target.getAttribute("data-location");
    console.log(travelDataLocation);
    const travelDataID = event.target.getAttribute("data-id");
    console.log(travelDataID);
    const travelDataBudget = event.target.getAttribute("data-budget");
    console.log(travelDataBudget);
    const travelDataWhatDO = event.target.getAttribute("data-whatdo");
    console.log(travelDataWhatDO);
    const travelDataStartingDate =
      event.target.getAttribute("data-startingDate");
    console.log(travelDataStartingDate);
    const travelDataEndingDate = event.target.getAttribute("data-endingDate");
    console.log(travelDataEndingDate);

    const response = await fetch("/api/travel/" + travelDataID, {
      method: "PUT",
      body: JSON.stringify({
        travelDataLocation,
        travelDataBudget,
        travelDataWhatDO,
        travelDataStartingDate,
        travelDataEndingDate,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Failed to update Travel information");
    }
  }
}

document
  .querySelector("#testContainerTravelUpdate")
  .addEventListener("click", updateTravelBtnHandlebarsHandler);
