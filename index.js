"use strict";

const express = require("express");
const path = require("node:path");
const logger = require("./middleware/logger");
const app = express();
const port = 3000;

app.use(logger);

/* --- Routing code --- */
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "pages", "index.html"));
});
app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "pages", "about.html"));
});

app.get("/api/numbers", (req, res) => {
  res.send([1, 2, 3, 4]);
});

app.listen(port, () => {
  console.log(`app is listening on http://localhost:${port}`);
});
