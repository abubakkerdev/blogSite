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
const {blogCreate, blogAll} = require("../../../controllers/backend/blogController");
const _ = express.Router(); 
 
_.post("/create", upload.single("image_post"), blogCreate);
_.get("/all", blogAll);
   
module.exports = _;