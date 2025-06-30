const express = require("express");
const { subscriberController } = require("../controllers/subscriber.controller");
const subRouter = express.Router();

subRouter.get("/subscrive", subscriberController)

module.exports = subRouter