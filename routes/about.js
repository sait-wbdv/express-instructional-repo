"use strict";

const path = require("node:path");
const express = require("express");
const router = express.Router();

const rootDir = path.resolve(__dirname, "..");

router.get("/about", (req, res) => {
  res.sendFile(path.join(rootDir, "pages", "about.html"));
});

module.exports = router;
