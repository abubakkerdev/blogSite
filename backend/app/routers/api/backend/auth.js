const express = require("express");
const multer = require("multer");
const path = require("node:path");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/images");
  },
  filename: function (req, file, cb) {
    const fileExt = path.extname(file.originalname);

    const fileName = file.originalname
      .replace(fileExt, "")
      .toLowerCase()
      .split(" ")
      .join("-");

    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);

    cb(null, fileName + uniqueSuffix + fileExt);
  },
});

const upload = multer({ storage: storage });

const { login, tokenCheck, loginPage } = require("../../../controllers/backend/authController");
const userFromValidation = require("../../../middleware/userFromValidation");
const _ = express.Router();

_.post("/register", upload.single("image_upload"), userFromValidation, login);
_.get("/tokencheck/:id", tokenCheck);
_.get("/loginpage", loginPage);
_.post("/login", login);

module.exports = _;
