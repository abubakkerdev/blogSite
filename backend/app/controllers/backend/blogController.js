const blogPost = require("../../model/blogPost");

const blogController = {
    blogCreate(req, res){
        const { title, description, authId} = req.body

        const blog = new blogPost({
            title, 
            description,
            image: req.file.filename,
            authId
          });

          blog.save();

        res.send({
            success: "blog create"
        });
    },
    async blogAll(req, res) {
        const allBlog = await blogPost.find({});

        res.send({
            data: allBlog
        });
    }
}


module.exports = blogController