"use strict";

const express = require("express");
const logger = require("./middleware/logger");

// import routes
const { homeRouter, aboutRouter, numbersRouter } = require("./routes");

const app = express();
const port = 3000;

app.use(logger);

// middleware for form data
app.use(express.urlencoded({ extended: true }));

/* --- Routing code --- */

app.use("/", homeRouter);
app.use("/about", aboutRouter);
app.use("/api/numbers", numbersRouter);

// Error handlers
app.use((req, res) => {
  res.status(404).send("Page Not Found"); // Or render a custom 404 page
});
app.use((err, req, res) => {
  console.error(`Unhandled Error: ${err}`);
  res.status(500).send("Internal Server Error");
});

app.listen(port, () => {
  console.log(`app is listening on http://localhost:${port}`);
});
