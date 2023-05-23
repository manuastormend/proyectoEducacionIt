//Inicializa los elementos ocultos
const persona1 = document.querySelector("#persona1");
const persona2 = document.querySelector("#persona2");
const persona3 = document.querySelector("#persona3");
const persona4 = document.querySelector("#persona4");

const contacto = document.querySelector(".nosotros-article-contacto");

let resultado1 = persona1.offsetTop - persona1.clientHeight;
let resultado2 = persona2.offsetTop - persona2.clientHeight;
let resultado3 = persona3.offsetTop - persona3.clientHeight;
let resultado4 = persona4.offsetTop - persona4.clientHeight;

persona1.style.opacity = 0;
persona2.style.opacity = 0;
persona3.style.opacity = 0;
persona4.style.opacity = 0;

console.log(resultado1);
console.log(resultado2);
console.log(resultado3);
console.log(resultado4);

document.addEventListener("scroll", (e) => {
  let scrollY = window.scrollY;

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
