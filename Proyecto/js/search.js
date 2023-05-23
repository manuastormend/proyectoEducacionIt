const searchButton = document.querySelector(".search-bar__form-submit");
const searchInput = document.querySelector(".search-bar__form-search");

searchInput.addEventListener("input", (e) => {
  console.log(searchInput.value);
  const cards = document.querySelectorAll(".card");
  if (searchInput.value != "") {
    const value = searchInput.value.toLowerCase();
    if (value != "") {
      cards.forEach((card) => {
        //Se fija en el heading
        let cardContent = card
          .querySelector(".card__heading")
          .textContent.toLowerCase();

        //Se fija en la descripcion
        cardContent += card
          .querySelector(".card__description p")
          .textContent.toLowerCase();

        //Se fija en el footer de la card
        cardContent += card
          .querySelector(".card__footer p")
          .textContent.toLowerCase();

        if (!cardContent.includes(value)) {
          card.style.display = "none";
        } else {
          card.style.display = "flex";
        }
      });
    }
  } else {
    cards.forEach((card) => {
      card.style.display = "flex";
    });
  }
});
