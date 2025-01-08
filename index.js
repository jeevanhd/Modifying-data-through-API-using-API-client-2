const bodyParser = require("body-parser");
const express = require("express");
const { resolve } = require("path");
const ConnectDB = require("./db.js");
const routes = require("./routes.js");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 8080;

app.use(express.static("static"));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(resolve(__dirname, "pages/index.html"));
});

app.use("/menu", routes);

app.listen(port, () => {
  ConnectDB();
  console.log(`Example app listening at http://localhost:${port}`);
});
