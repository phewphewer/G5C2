const express = require("express");
const {
    createPost,
    getPost,
    deletePost,
    updatePost,
} = require("../controllers/postController");
const Post = require("../models/postModel");
const router = express.Router();

// Get a single user
router.get("/post/:id", getPost);

// Post a new user
router.post("/create_post", createPost);

// Delete a user
router.delete("/delete_post/:id", deletePost);

// Update a user
router.patch("/update_post/:id", updatePost);

module.exports = router;
