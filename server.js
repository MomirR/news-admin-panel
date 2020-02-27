require("dotenv").config();
const express = require("express");
const { PORT_FE_PANEL } = process.env;
const path = require("path");

const app = express();

const port = PORT_FE_PANEL;
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, "build")));
app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(port);
