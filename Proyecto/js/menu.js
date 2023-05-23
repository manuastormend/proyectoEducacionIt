const menu = document.querySelector("#menu .fa-bars");
const desplegable = document.querySelector(".menu__desplegable");
const desplegable_link = document.querySelector(".menu__desplegable-link");

//Inicializa
let clicked = false;
desplegable.style.display = "none";

menu.addEventListener("click", () => {
  if (clicked) {
    desplegable.style.display = "none";
  } else {
    desplegable.style.display = "block";
  }
  clicked = !clicked;
});

desplegable_link.addEventListener("click", () => {
  desplegable.style.display = "none";
  clicked = false;
});
