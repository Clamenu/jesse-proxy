const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const logger = require("morgan");
const PORT = process.env.PORT || 2018;

app.use(express.static("public"));
app.use("/:id", express.static("./public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(logger("dev"));

app.listen(PORT, () => console.log(`App is listening on port: ${PORT}`));

module.exports = app;
