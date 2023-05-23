import productos from "./productos.js";

const cardContainer = document.querySelector(".cards-container");

for (const producto of productos) {
  const card = cardContainer.appendChild(document.createElement("A"));

  card.setAttribute("href", "#");
  card.setAttribute("class", "card col-lg-2 col-md-3 col-sm-4 col-xs-12");
  card.innerHTML = ` 
                        <article class="card__article">
                            <div class="card__image-container">
                            <img
                                class="card__image"
                                src=${producto.imagen}
                                alt=${producto.alt}
                            />
                            </div>
                            <div class="card__content">
                            <h2 class="card__heading">${producto.nombre}</h2>
                            <div class="card__description">
                                <p>
                                
                                </p>
                            </div>
                            </div>
                            <div class="card__footer">
                                <p>US$ ${producto.precio}
                            </div>
                        </article>
                         
                       `;
}
