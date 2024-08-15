"use strict";

const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const numbers = [1, 2, 3, 4];
  res.json(numbers);
});

module.exports = router;
