"use strict";

const express = require("express");
const users = require("../../data/users.json");
const router = express.Router();
const getUserById = require("../../utils/getUserById");
const getUserByName = require("../../utils/getUserByName");

router.get("/:userId", (req, res) => {
  const user = getUserById(req.params.userId, users);
  if (user) {
    res.json(user);
  } else {
    res.status(404).send("User not found");
  }
});

router.get("/user/:userName", (req, res) => {
  const user = getUserByName(req.params.userName, users);
  if (user) {
    res.json(user);
  } else {
    res.status(404).send("User Not Found");
  }
});

module.exports = router;
