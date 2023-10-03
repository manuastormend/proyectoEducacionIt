const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  nombre: String,
  email: String,
  telefono: Number,
  tipoconsulta: String,
  consulta: String,
});

const emailModel = mongoose.model("Email", schema, "emails");

module.exports = emailModel;
