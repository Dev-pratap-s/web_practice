const Post = require("../models/Postmodel");
const Like = require("../models/likemodel");

// Like a post
exports.likePost = async (req, res) => {
    try {
        const { post, user } = req.body;

        const like = new Like({ post, user });
        const savedLike = await like.save();

        const updatePost = await Post.findByIdAndUpdate(
            post,
            { $push: { likes: savedLike._id } },
            { new: true }
        ).populate("likes", "user");

        res.json({
            message: "Post liked successfully 👍",
            post: updatePost
        });
    } catch (error) {
        console.error("Error aaya bhai:", error);
        res.status(500).json({
            error: "Like karte waqt error aaya 😓"
        });
    }
};

// Unlike a post
exports.unlikePost = async (req, res) => {
    try {
        const { post, like } = req.body;

        const deleteLike = await Like.findOneAndDelete({ post: post, _id: like });

        const updatePost = await Post.findByIdAndUpdate(
            post,
            { $pull: { likes: deleteLike._id } },
            { new: true }
        ).populate("likes", "user");

        res.json({
            message: "Post unliked successfully 👎",
            post: updatePost
        });

    } catch (error) {
        console.error("Error aaya bhai:", error);
        res.status(500).json({
            error: "unLike karte waqt error aaya 😓"
        });
    }
};
