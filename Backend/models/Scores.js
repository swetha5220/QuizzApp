const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const scores = new Schema({
  name: String,
  score: Number,
  date: { type: Date, default: Date.now },
});

const Score = mongoose.model("Scores", scores);
module.exports = Score;
