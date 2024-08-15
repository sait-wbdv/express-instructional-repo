"use strict";

const express = require("express");
const app = express();
const port = 3000;

/* --- Middleware examples --- */

// Custom logger
function currentTime() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  return `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}`;
}

function logger(req, res, next) {
  console.log(`Time: ${currentTime()}`);
  console.log(`method: ${req.method}`);
  console.log(`path: ${req.originalUrl}`);
  next();
}

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
