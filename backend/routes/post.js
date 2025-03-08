const express = require("express");
const {
  createPostId,
  getPostsId,
  createPost,
  getPost,
  deletePost,
  updatePost,
} = require("../controllers/postController");
const router = express.Router();

// Create a single post with Id
router.post("/create", createPostId);

// Get all posts of a user
router.get("/user/:userId", getPostsId);

// Get a single post
router.get("/post/:id", getPost);

// Post a new post
router.post("/create_post/", createPost);

// Delete a post
router.delete("/delete_post/:id", deletePost);

// Update a post
router.patch("/update_post/:id", updatePost);

module.exports = router;
