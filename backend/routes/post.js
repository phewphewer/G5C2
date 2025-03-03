const express = require("express");
const {
    createPost,
    getPost,
    deletePost,
    updatePost,
} = require("../controllers/postController");
const Post = require("../models/postModel");
const router = express.Router();

// Get a single post
router.get("/post/:id", getPost);

// Post a new post
router.post("/create_post", createPost);

// Delete a post
router.delete("/delete_post/:id", deletePost);

// Update a post
router.patch("/update_post/:id", updatePost);

module.exports = router;
