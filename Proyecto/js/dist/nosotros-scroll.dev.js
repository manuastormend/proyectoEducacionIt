"use strict";

//Inicializa los elementos ocultos
var persona1 = document.querySelector("#persona1");
var persona2 = document.querySelector("#persona2");
var persona3 = document.querySelector("#persona3");
var persona4 = document.querySelector("#persona4");
var contacto = document.querySelector(".nosotros-article-contacto");
var resultado1 = persona1.offsetTop - persona1.clientHeight;
var resultado2 = persona2.offsetTop - persona2.clientHeight;
var resultado3 = persona3.offsetTop - persona3.clientHeight;
var resultado4 = persona4.offsetTop - persona4.clientHeight;
persona1.style.opacity = 0;
persona2.style.opacity = 0;
persona3.style.opacity = 0;
persona4.style.opacity = 0;
console.log(resultado1);
console.log(resultado2);
console.log(resultado3);
console.log(resultado4);
document.addEventListener("scroll", function (e) {
  var scrollY = window.scrollY;
  console.log(scrollY);

  if (scrollY > resultado1) {
    persona1.style.opacity = 100;
  } else {
    persona1.style.opacity = 0;
  }

  if (scrollY > resultado2) {
    persona2.style.opacity = 100;
  } else {
    persona2.style.opacity = 0;
  }

  if (scrollY > resultado3) {
    persona3.style.opacity = 100;
  } else {
    persona3.style.opacity = 0;
  }

  if (scrollY > resultado4 - 200) {
    persona4.style.opacity = 100;
  } else {
    persona4.style.opacity = 0;
  }
});