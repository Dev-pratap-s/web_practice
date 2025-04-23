const mongoose = require("mongoose");

// Route handler
const commentSchema = new mongoose.Schema({
    // Kaunsi post pe comment ho raha hai
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
        required: true
    },
    // Kaun comment kar raha hai
    user: {
        type: String,
        required: true
    },
    // Comment ka content
    body: {
        type: String,
        required: true
    }
});

// Export
module.exports = mongoose.model("Comment", commentSchema);
