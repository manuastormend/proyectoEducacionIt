const express = require("express");
const multer = require("multer");
const cardsController = require("../controllers/card.controller");
const cardsRouter = express.Router();

cardsRouter.get("/cards", cardsController.obtenerCards);
cardsRouter.post("/cards", cardsController.crearCard);

module.exports = cardsRouter;
