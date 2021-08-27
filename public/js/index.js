//====FORM CONTROLS MATERIALIZE CSS

//====BUTTON CONTROLS MATERIALIZE CSS

//====NAVBAR CONTROLS MATERIALIZE CSS

const optionsSideNav = {
  //fill this with how you want the menu to behave
};

const optionsModal = {
  //modal options
};

document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".sidenav");
  var instances = M.Sidenav.init(elems, optionsSideNav);
});

//=====MODAL CONTROLS MATERIALIZE CSS
document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".modal");
  var instances = M.Modal.init(elems, optionsModal);
});
