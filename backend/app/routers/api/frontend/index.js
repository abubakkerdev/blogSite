const express = require("express");
const _ = express.Router();

_.use("/backend", (req, res) => {
  res.send("backend page");
});

module.exports = _;
