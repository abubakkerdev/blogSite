const blogPost = require("../../model/blogPost");

const blogController = {
  blogCreate(req, res) {
    const { title, description, authId } = req.body;

    const blog = new blogPost({
      title,
      description,
      image: req.file.filename,
      authId,
    });

    blog.save();

    res.send({
      success: "blog create",
    });
  },
  async blogAll(req, res) {
    const allBlog = await blogPost.find({});

    res.send({
      data: allBlog,
    });
  },
  async singleBlog(req, res) {
    const { id } = req.params;
    const allBlog = await blogPost.find({ _id: id });
    res.send({
      success: "ok",
      data: allBlog[0],
    });
  },
  async homeBlog(req, res) {
    const allBlog = await blogPost.find({}).populate({
        path: "authId",
        select: "_id uname image"
    });

    res.send({
      success: "ok",
      data: allBlog,
    });
  },
  async singleBlogs(req, res) {
    const { id } = req.params;

    const allBlog = await blogPost.find({_id: id})

    res.send({
      success: "ok",
      data: allBlog[0],
    });


  },
};

module.exports = blogController;
