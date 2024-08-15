"use strict";

const express = require("express");
const path = require("node:path");
const app = express();
const port = 3000;

/* --- 1. Middleware examples --- */

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

// 2. Serve static assets makes it so you can reach your images, css files, and other assets

app.use(express.static(path.join(__dirname, "public")));

// this will allow you to go to http://localhost:3000/penguin.jpg

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
