"use strict";

var searchButton = document.querySelector(".search-bar__form-submit");
var searchInput = document.querySelector(".search-bar__form-search");
searchInput.addEventListener("input", function (e) {
  console.log(searchInput.value);
  var cards = document.querySelectorAll(".card");

  if (searchInput.value != "") {
    var value = searchInput.value.toLowerCase();

    if (value != "") {
      cards.forEach(function (card) {
        //Se fija en el heading
        var cardContent = card.querySelector(".card__heading").textContent.toLowerCase(); //Se fija en la descripcion

        cardContent += card.querySelector(".card__description p").textContent.toLowerCase(); //Se fija en el footer de la card

        cardContent += card.querySelector(".card__footer p").textContent.toLowerCase();

        if (!cardContent.includes(value)) {
          card.style.display = "none";
        } else {
          card.style.display = "flex";
        }
      });
    }
  } else {
    cards.forEach(function (card) {
      card.style.display = "flex";
    });
  }
});