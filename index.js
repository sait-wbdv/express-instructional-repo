"use strict";

const express = require("express");
const logger = require("./logger");
const app = express();
const port = 3000;

app.use(logger);

/* --- Routing code --- */
app.get("/", (req, res) => {
  res.send("Hello There, from Express Server");
});

app.get("/api/numbers", (req, res) => {
  res.send([1, 2, 3, 4]);
});

app.listen(port, () => {
  console.log(`app is listening on http://localhost:${port}`);
});
