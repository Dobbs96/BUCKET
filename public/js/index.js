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

//------------Page triggers for modals:
//----Homepage
/*
  id= modal1- If res.status = 200 on a comment post, trigger modal 

  id= modal2- If res.status = 500 on comment post, trigger modal
*/
//----Dashboard
/*
  id= modal7- If delete button is pushed, trigger modal
  
  id= modal10- If res.status = 500, trigger modal

  id= modal8 or 9- If res.status = 200, trigger modal

*/
//----Login
/*

  id= modal3- If res.status = 500, trigger modal

*/
//----Signup
