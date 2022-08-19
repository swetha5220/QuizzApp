const express = require("express");
const axios = require("axios");
const mongoose = require("mongoose");
const app = express.Router();
const Score = require("../models/Scores");

app.get("/", (req, res) => {
  Score.find()
    .then((data) => res.json(data.sort(function(a, b){return b.score - a.score})))
    .catch((err) => console.log(err));
});

app.post("/", async (req, res) => {
  const { name, score } = req.body;
  console.log(req.body);
  const newScore = new Score({
    name,
    score,
    date: Date.now(),
  });
  await newScore.save();
  console.log({ message: "Successfully saved" });
  res.json({ msg: "Successfully saved" });
});
module.exports = app;
