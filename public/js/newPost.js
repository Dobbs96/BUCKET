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
    <form class="col s12">
      <div class="row">
        <div class="input-field col s6">
          <input id="input_text" type="text" data-length="10" />
          <label for="input_text">Location</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s6">
          <input id="input_text" type="text" data-length="10" />
          <label for="input_text">Budget</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s6">
          <input id="input_text" type="text" data-length="10" />
          <label for="input_text">Description</label>
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
    <form class="col s12">
      <div class="row">
        <div class="input-field col s6">
          <input id="input_text" type="text" data-length="10" />
          <label for="input_text">Recipe Name</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s6">
          <input id="input_text" type="text" data-length="10" />
          <label for="input_text">Price</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s6">
          <input id="input_text" type="text" data-length="10" />
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
      <form class="col s12">
        <div class="row">
          <div class="input-field col s6">
            <input id="input_text" type="text" data-length="10" />
            <label for="input_text">New Experience</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s6">
            <input id="input_text" type="text" data-length="10" />
            <label for="input_text">Budget</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s6">
            <p class="range-field">
              <input type="range" id="test5" min="1" max="5" />
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

// async function newFormHandler(event) {
//     event.preventDefault();
// //    if category equal
// //      recipe  --- do post for recipe
// // experience --- do post for experience
// // travel ---- do post for travel

//     const title = document.querySelector('input[name="post-title"]').value;
//     const post = document.querySelector('input[name="post-content"]').value;

//     const response = await fetch(`/api/travel`, {
//       method: "POST",
//       body: JSON.stringify({
//         title,
//         post,
//       }),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });

//     if (response.ok) {
//       document.location.replace("/dashboard");
//     } else {
//       alert(response.statusText);
//     }
//   }

//   document
//     .querySelector(".new-post-form")
//     .addEventListener("submit", newFormHandler);
