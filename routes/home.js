"use strict";

const path = require("node:path");
const express = require("express");
const router = express.Router();

const rootDir = path.resolve(__dirname, "..");

router.get("/", (req, res) => {
  res.sendFile(path.join(rootDir, "pages", "index.html"));
});

router.post("/", (req, res) => {
  const message = req.body.message;
  if (!message) {
    res.status(400).send("Message is required");
    return;
  }
  res.send(`You submitted: ${message}`);
});

module.exports = router;
