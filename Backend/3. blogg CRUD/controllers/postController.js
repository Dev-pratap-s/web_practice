const Post = require("../models/Postmodel");

exports.createPost = async (req, res) => {
    try {
        const { title, body } = req.body;
        const post = new Post({ title, body });
        const savedPost = await post.save();

        res.json({
            post: savedPost
        });

    } catch (error) {
        return res.status(400).json({
            error: "Error while creating post"
        });
    }
};

exports.getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find()
            // .populate("Like")
            .populate("comments")
            .exec();

        res.json({
            posts: posts
        });

    } catch (error) {
        console.error("Error in getAllPosts:", error); // 👈 Ye line add kar!
        return res.status(400).json({
            error: "Error while fetching posts"
        });
    }
};