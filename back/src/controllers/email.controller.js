const emailModel = require("../models/email.model");

const emailController = {
  async crearEmail(req, res) {
    const data = req.body;
    if (
      data.nombre == undefined ||
      data.email == undefined ||
      data.telefono == undefined ||
      data.tipoconsulta == undefined ||
      data.consulta == undefined
    ) {
      res.json({ error: "Propiedades faltantes" });
      return;
    }

    const response = await emailModel.insertMany([data]);
    res.json(response);
  },
};

module.exports = emailController;
