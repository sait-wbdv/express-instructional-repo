"use strict";

const express = require("express");
const router = express.Router();

const users = [
  {
    id: 0,
    name: "Judit Polgar",
  },
  {
    id: 1,
    name: "Magnus Carlsen",
  },
  {
    id: 2,
    name: "Garry Kasparov",
  },
  {
    id: 3,
    name: "Mikhail Botvinnik",
  },
];

router.get("/", (req, res) => {
  return res.json(users);
});

router.get("/:userId", (req, res) => {
  const userId = parseInt(req.params.userId);
  const user = users.find((user) => user.id === userId);
  if (user) {
    res.json(user);
  } else {
    res.status(404).send("User not found");
  }
});

router.get("/name/:userName", (req, res) => {
  const userName = req.params.userName;
  const user = users.find((user) => {
    const name = user.name.toLowerCase().replace(/\s+/g, "-");
    return name === userName;
  });
  if (user) {
    res.json(user);
  } else {
    res.status(404).send("User Not Found");
  }
});
module.exports = router;
