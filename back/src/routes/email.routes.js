const express = require("express");

const emailController = require("../controllers/email.controller");
const emailRouter = express.Router();

emailRouter.post("/email", emailController.crearEmail);

module.exports = emailRouter;
