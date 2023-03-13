const express = require("express");
const postRoutes = require("./routes/post");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const expressValidator = require("express-validator");
const dotenv = require("dotenv");
dotenv.config();

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator());
app.use("/", postRoutes);

mongoose.connect(process.env.MONGO_URL).then(() => {
  console.log("connected");
});

mongoose.connection.on("error", (err) => {
  console.log(`Erro ${err}`);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Running ${port}`);
});
