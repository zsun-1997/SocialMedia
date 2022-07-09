const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/users");
const authorRoute = require("./routes/author");
const postRoute = require("./routes/post");

dotenv.config();

mongoose.connect(process.env.MONGO_URL);

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/users", userRoute);
app.use("/api/auth", authorRoute);
app.use("/api/post", postRoute);

app.listen(8800, () => {
  console.log("Backend Server is running!!!");
});

module.exports = app;
