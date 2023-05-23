"use strict";

var _productos = _interopRequireDefault(require("./productos.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var cardContainer = document.querySelector(".cards-container");
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = _productos["default"][Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var producto = _step.value;
    var card = cardContainer.appendChild(document.createElement("A"));
    card.setAttribute("href", "#");
    card.setAttribute("class", "card col-lg-2 col-md-3 col-sm-4 col-xs-12");
    card.innerHTML = " \n                        <article class=\"card__article\">\n                            <div class=\"card__image-container\">\n                            <img\n                                class=\"card__image\"\n                                src=".concat(producto.imagen, "\n                                alt=").concat(producto.alt, "\n                            />\n                            </div>\n                            <div class=\"card__content\">\n                            <h2 class=\"card__heading\">").concat(producto.nombre, "</h2>\n                            <div class=\"card__description\">\n                                <p>\n                                \n                                </p>\n                            </div>\n                            </div>\n                            <div class=\"card__footer\">\n                                <p>US$ ").concat(producto.precio, "\n                            </div>\n                        </article>\n                         \n                       ");
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator["return"] != null) {
      _iterator["return"]();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}