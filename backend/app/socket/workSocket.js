const blogPost = require("../model/blogPost");
const fs = require("node:fs");

const workSocket = (io, socket) => {
  socket.on("some", function (info) {
    console.log("show some thing", info);
  });

  // edit blog code

  socket.on("blogEdit", async function (id) {
    let blog = await blogPost.find({ _id: id });

    socket.emit("editBlog", blog[0]);
  });
  // edit blog code

  socket.on("blogDelete", async (id) => {
    // console.log(id);
    let blog = await blogPost.find({ _id: id });

    if (blog[0].image) {
      fs.unlinkSync("./public/images/" + blog[0].image);
    }

    let deleteBlog = await blogPost.findByIdAndDelete({ _id: blog[0]._id });

    console.log("obj", deleteBlog);
    socket.emit("deleteBlog", deleteBlog);
  });
};

module.exports = workSocket;
