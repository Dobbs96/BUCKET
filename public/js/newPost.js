let optionsDropDown = {};
document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll("select");
  var instances = M.FormSelect.init(elems, optionsDropDown);
});

function myFunction() {
  var x = document.getElementById("mySelect").value;
  if (x === "Travel")
    return (document.getElementById("demo").innerHTML = `<h4>Travel</h4>
  <div class="row">
    <form class="col s12 new-post-travel" action="/api/travel" method="POST">
      <div class="row">
        <div class="input-field col s6">
          <input id="location" name="location" type="text" required />
          <label for="location">Location</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s6">
          <input id="budget" name="budget" type="text" required/>
          <label for="budget">Budget</label>
        </div>
      </div>
      <div class="row">
      <div class="input-field col s6">
        <input id="starting_date" name="starting_date" type="text" required/>
        <label for="starting_date">Start Date</label>
      </div>
    </div>
    <div class="row">
    <div class="input-field col s6">
      <input id="ending_date" name="ending_date" type="text" required/>
      <label for="ending_date">Ending Date</label>
    </div>
  </div>
      <div class="row">
        <div class="input-field col s6">
          <input id="description" name="description" type="text" required/>
          <label for="description">Description</label>
        </div>
      </div>
      <button
        class="btn waves-effect waves-light"
        type="submit"
        name="action"
      >Submit
        <i class="material-icons right">send</i>
      </button>
    </form>
  </div>`);
  if (x === "Recipe")
    return (document.getElementById("demo").innerHTML = `<h4>Recipe</h4>

  <div class="row">
    <form class="col s12 new-post-recipe" action="/api/recipe" method="POST">
      <div class="row">
        <div class="input-field col s6">
          <input id="input_text" type="text" name="name" data-length="10" required/>
          <label for="input_text">Recipe Name</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s6">
          <input id="input_text" type="text" name="price" data-length="10" required/>
          <label for="input_text">Price</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s6">
          <input id="input_text" type="text" name="link" data-length="10" required/>
          <label for="input_text">Link to Recipe</label>
        </div>
      </div>
      <button
        class="btn waves-effect waves-light"
        type="submit"
        name="action"
      >Submit
        <i class="material-icons right">send</i>
      </button>
    </form>
  </div>`);
  if (x === "Experience")
    return (document.getElementById("demo").innerHTML = `<h4>Experience</h4>
    <div class="row">
      <form class="col s12 new-post-experience" action="/api/experience" method="POST">
        <div class="row">
          <div class="input-field col s6">
            <input id="input_text" type="text" name="what_do" data-length="10" required />
            <label for="input_text">New Experience</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s6">
            <input id="input_text" type="text" name="budget" data-length="10" required />
            <label for="input_text">Budget</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s6">
            <p class="range-field">
              <input type="range" id="test5" name="rating" min="1" max="5" />
            </p>
          </div>
        </div>
        <button
          class="btn waves-effect waves-light"
          type="submit"
          name="action"
        >Submit
          <i class="material-icons right">send</i>
        </button>
      </form>
    </div>`);
}

// const travelForm = document.querySelector(".new-post-travel");

// const newTravelPostHandler = async (event) => {
//   event.preventDefault();
//   await console.log("clicked");
//   const location = await document.querySelector("#location").value;
//   const budget = await document.querySelector("budget").value;
//   const description = await document.querySelector("#description").value;
//   console.log(location);
//   console.log(budget);
//   console.log(description);

// const response = await fetch(`/api/travel`, {
//   method: "POST",
//   body: JSON.stringify({
//     title,
//     post,
//   }),
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// if (response.ok) {
//   document.location.replace("/dashboard");
// } else {
//   alert(response.statusText);
// }
// };

// travelForm.addEventListener("submit", newTravelPostHandler);
