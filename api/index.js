const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173/",
  })
);

mongoose.connect(process.env.MONGO_URL);

app.get("/test", (req, res) => {
  res.json("ok");
});

app.listen(4000);
