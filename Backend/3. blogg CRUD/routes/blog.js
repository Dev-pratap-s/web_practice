// 1. Express se route banaya
const express = require("express");
const router = express.Router();

// 2. Controller se mapping ki
const { createComment } = require("../controllers/commentController"); // Naam exact match hona chahiye
const {createPost,getAllPosts} = require('../controllers/postController')
// 3. Route define kiya
router.post("/comments/create", createComment); // 
// POST route for creating comment
router.post("/posts/create",createPost)
router.get("/get/allPosts",getAllPosts)


// 4. Export kiya router ko
module.exports = router;
