const cardsModel = require("../models/card.model");

const cardsController = {
  async crearCard(req, res) {
    const data = req.body;

    if (
      data.id == undefined ||
      data.nombre == undefined ||
      data.imagen == undefined ||
      data.alt == undefined ||
      data.descripcion == undefined ||
      data.precio == undefined ||
      data.stock == undefined
    ) {
      res.json({ error: "Propiedades faltantes" });
      return;
    }

    const docs = await cardsModel.findOne({ id: data.id }).exec();

    if (docs != null) {
      res.json({ error: "El producto con este id ya existe" });
      return;
    }

    const response = await cardsModel.insertMany([data]);
    res.json(response);
  },

  async obtenerCards(req, res) {
    const docs = await cardsModel.find({}).exec();

    console.log(docs);
    res.json(docs);
  },
};

module.exports = cardsController;
