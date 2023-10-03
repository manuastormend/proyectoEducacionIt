const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  id: String,
  nombre: String,
  imagen: String,
  descripcion: String,
  alt: String,
  precio: String,
  stock: String,
});

const cardsModel = mongoose.model("Card", schema, "cards");

module.exports = cardsModel;
