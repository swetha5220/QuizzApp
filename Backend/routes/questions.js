const express = require("express");
const mongoose = require("mongoose");
const axios = require("axios");
const app = express.Router();
const Questions = require("../models/Questions");

app.get("/", (req, res) => {
  Questions.find()
    .then((data) => res.json(data))
    .catch((err) => console.log(err));
});
app.get("/:index", (req, res) => {
  Questions.findById(req.params.index)
    .then((data) => res.json(data))
    .catch((err) => console.log(err));
});
module.exports = app;
