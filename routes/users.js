"use strict";
const express = require("express");
const slugify = require("../utils/slugify");
const users = require("../data/users.json");
const getUserById = require("../utils/getUserById");
const getUserByName = require("../utils/getUserByName");
const router = express.Router();

router.get("/:userId", (req, res) => {
  const user = getUserById(req.params.userId, users);
  if (user) {
    const html = `
    <!DOCTYPE html>
    <html>
   <head> 
   <title>${user.name}</title>
    </head>
    <body>
    <main>
    <h1>${user.name}</h1>
    </main>
    </body> 
    `;
    res.end(html);
  } else {
    res.status(404).send("User Not Found");
  }
});

router.get("/user/:userName", (req, res) => {
  // const userName = slugify(req.params.userName);
  /*
  const user = users.find((user) => {
    const slugifiedName = slugify(user.name);
    return slugifiedName === userName;
  });
  */
  const user = getUserByName(req.params.userName, users);
  if (user) {
    const html = `
    <!DOCTYPE html>
    <html>
   <head> 
   <title>${user.name}</title>
    </head>
    <body>
    <main>
    <h1>${user.name}</h1>
    </main>
    </body> 
    `;
    res.end(html);
  } else {
    res.status(404).send("User Not Found");
  }
});

module.exports = router;
