// const bodyParser = require("body-parser");
const axios = require("axios");
const mongoose = require("mongoose");
const express = require("express");
require("dotenv").config();
const cors = require("cors");
const path = require("path");

const scores = require("./routes/scores");
const questions = require("./routes/questions");

mongoose.connect(process.env.DATABASE);

const conn = mongoose.connection;
conn.once("open", () => {
  console.log("connection established");
});

const app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, "../client/index.html")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "successfully connected" });
});

app.use("/api/questions", questions);

app.use("/api/scores", scores);

app.listen(5001, () => {
  console.log("Server Started");
});
