"use strict";

const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello There, from Express Server");
});

app.listen(port, () => {
  console.log(`app is listening on http://localhost:${port}`);
});
