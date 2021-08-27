const { Recipe } = require("../../models");

let optionsDropDown = {};
document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll("select");
  var instances = M.FormSelect.init(elems, optionsDropDown);
});

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
