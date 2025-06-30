const express = require("express");
const { publisherController } = require("../controllers/publisher.controller");
const pubRouter = express.Router();

pubRouter.post("/publish/:topic", publisherController)

module.exports = pubRouter