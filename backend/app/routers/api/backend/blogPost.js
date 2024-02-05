const express = require("express");
const _ = express.Router();

_.use("/all", (req, res) => res.send("All data page"));
  
module.exports = _;