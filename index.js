const express = require('express');
const app = express();
const fs = require("fs");
const port = 3000;

// Welcome page
app.get("/", function (req, res) {
  res.sendFile("index.html", {root: __dirname });
});

// About page
app.get("/about", function (req, res) {
  res.sendFile("about.html", {root: __dirname });
});

// Contact page
app.get("/contact", function (req, res) {
  res.sendFile("contact-me.html", {root: __dirname });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});