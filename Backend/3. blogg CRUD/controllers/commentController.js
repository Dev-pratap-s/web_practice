// Import models
const Post = require("../models/Postmodel");
const Comment = require("../models/commentmodel");

// Comment create karne ka logic
exports.createComment = async (req, res) => {
    try {
        // Request body se data nikaal rahe hain
        const { post, user, body } = req.body;

        // Naya comment object bana rahe hain
        const comment = new Comment({
            post,
            user,
            body
        });

        // Comment database mein save kar rahe hain
        const savedComment = await comment.save();

        // Post ko dhoondh ke uske comments array mein naya comment add kar rahe hain
        const updatedPost = await Post.findByIdAndUpdate(
            post,
            { $push: { comments: savedComment._id } }, // yeh 'comments' field schema mein hona chahiye
            { new: true }
        ).populate("comments").exec(); // exec() sahi se call kiya

        // Success response bhej rahe hain
        return res.status(200).json({
            message: "Comment create ho gaya aur post mein add bhi ho gaya ✅",
            comment: savedComment,
            post: updatedPost
        });

    } catch (error) {
        console.error("Error aaya bhai:", error); // Console mein error dikha dega
        return res.status(500).json({
            error: "Comment create karte waqt error aaya 😓"
        });
    }
};
