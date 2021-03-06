//OPTIONS OBJECTS FOR MATERIALIZE ASSETS
const optionsSideNav = {
  //fill this with how you want the menu to behave
};

const optionsModal = {
  //modal options
};

const optionsPara = {
  //parallax options
};

//INITIALIZING MATERIALIZE ASSETS

//------------SideNav
document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".sidenav");
  var instances = M.Sidenav.init(elems, optionsSideNav);
});

//--------------Modals
document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".modal");
  console.log("inside modal index.js ===========");
  console.log(elems);
  var instances = M.Modal.init(elems, optionsModal);
  console.log(instances);
  console.log("inside modal index.js ===========");
});

//---------------Parallax
document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".parallax");
  var instances = M.Parallax.init(elems, optionsPara);
});
