const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const QuestionSchema = new Schema({
  questionText: String,
  options: { type: Array, default: [] },
  answer: String,
});

const Question = mongoose.model("Questions", QuestionSchema);
module.exports = Question;
