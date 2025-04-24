// 1. Express se route banaya
const express = require("express");
const router = express.Router();

// 2. Controller se mapping ki
const { createComment } = require("../controllers/commentController"); // Naam exact match hona chahiye
const {createPost,getAllPosts} = require('../controllers/postController')
const {likePost, unlikePost} = require("../controllers/likeController")


// 3. Route define kiya
router.post("/comments/create", createComment)
router.post("/posts/create",createPost)
router.get("/get/allPosts",getAllPosts)
router.post("/likes/like", likePost)
router.post("likes/inlike",unlikePost)


// 4. Export kiya router ko
module.exports = router;
