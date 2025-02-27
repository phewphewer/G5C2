const express = require("express");
const {
    createPost,
    getPost,
    deletePost,
    updatePost,
} = require("../controllers/postController");
const Post = require("../models/postModel");
const router = express.Router();

// Get a single book
router.get("/post/:id", getPost);

// Post a new book
router.post("/create_post", createPost);

// Delete a book
router.delete("/delete_post/:id", deletePost);

// Update a book
router.patch("/update_post/:id", updatePost);

module.exports = router;
