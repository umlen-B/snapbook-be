// import express from "express";
// import mongoose from "mongoose";
// import cors from "cors";
// import bodyParser from "body-parser";

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const postRoutes = require("./routes/posts");
const fileupload = require("express-fileupload");

// import postRoutes from "./routes/post.js";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(fileupload({ useTempFiles: true }));
app.use(cors());

app.use("/posts", postRoutes);
const CONNECTION_URL = `mongodb+srv://johnson:YttSlX3kyvRzopRL@snapbook.sfwmv.mongodb.net/snapbook?retryWrites=true&w=majority`;

const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL)
  .then(() => {
    return app.listen(PORT, () => {
      return console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => console.log(error.message));
