"use strict";

var menu = document.querySelector("#menu .fa-bars");
var desplegable = document.querySelector(".menu__desplegable");
var desplegable_link = document.querySelector(".menu__desplegable-link"); //Inicializa

var clicked = false;
desplegable.style.display = "none";
menu.addEventListener("click", function () {
  if (clicked) {
    desplegable.style.display = "none";
  } else {
    desplegable.style.display = "block";
  }

  clicked = !clicked;
});
desplegable_link.addEventListener("click", function () {
  desplegable.style.display = "none";
  clicked = false;
});