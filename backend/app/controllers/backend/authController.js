const userModel = require("../../model/user");

const auth = {
  login(req, res) {
    const { uname, email, password } = req.body;
    console.log(req.body, req.file.filename);

    const users = new userModel({
      uname,
      email,
      password,
      image: req.file.filename,
    });

    users.save();

    res.send({
      success: "Data upload",
    });
  },
};

module.exports = auth;
