"use strict";

const express = require("express");
const path = require("node:path");
const logger = require("./middleware/logger");
const app = express();
const router = express.Router();
const port = 3000;

app.use(logger);

// middleware for form data
app.use(express.urlencoded({ extended: true }));

/* --- Routing code --- */
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "pages", "index.html"));
});

app.post("/", (req, res) => {
  const message = req.body.message;
  if (!message) {
    res.status(400).send("Message is required");
    return;
  }
  res.send(`You submitted: ${message}`);
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "pages", "about.html"));
});

app.get("/api/numbers", (req, res) => {
  res.send([1, 2, 3, 4]);
});

app.use((req, res, next) => {
  res.status(404).send("Page Not Found"); // Or render a custom 404 page
});
app.use((err, req, res, next) => {
  console.error(`Unhandled Error: ${err}`);
  res.status(500).send("Internal Server Error");
});

app.listen(port, () => {
  console.log(`app is listening on http://localhost:${port}`);
});
