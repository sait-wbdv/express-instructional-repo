"use strict";

const express = require("express");
const server = express();
const port = 3000;

server.listen(port, () => {
  console.log(`server is listening on http://localhost:${port}`);
});
