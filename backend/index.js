require("dotenv").config();
const express = require("express");
const cors = require('cors')
const databaseConnect = require("./app/database/database");
const app = express();
const route = require("./app/routers");
const port = process.env.APP_PORT;
const imageUrl = process.env.BASE_URL;

app.use(cors());
app.use(`${imageUrl}/images`, express.static(`${__dirname}/public/images/`));
app.use(express.json());
databaseConnect();
  
app.use(route);

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log("Server is running");
});
