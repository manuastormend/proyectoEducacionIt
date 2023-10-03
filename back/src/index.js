const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const cardsRouter = require("../src/routes/card.routes");
const emailRouter = require("../src/routes/email.routes");

require("dotenv").config({
  path: "../.env",
});

const server = express();

server.use(cors());
server.use(express.json());

server.use(cardsRouter);
server.use(emailRouter);

mongoose
  .connect(process.env.MONGOURI)
  .then(() => {
    console.log("Conectado a mongo");
    server.listen(process.env.PORT, () => {
      console.log("Servidor ejecutandose en puerto " + process.env.PORT);
    });
  })
  .catch(() => {
    console.log("Error conectando a mongo");
  });
