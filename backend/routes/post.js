const express = require("express");
const {
  // createPostId,
  getPosts,
  getPostsId,
  createPost,
  getPost,
  deletePost,
  updatePost,
} = require("../controllers/postController");

const requireAuth = require("../middleware/requireAuth");
const router = express.Router();

// Get Posts - Home page
router.get("/posts/", getPosts);

router.use(requireAuth);

// Create a single post with Id
// router.post("/create", createPostId);

// Get all posts of a user
router.get("/posts/:userId", getPostsId);

// Get a single post
router.get("/post/:id", getPost);

// Post a new post
router.post("/create_post/", requireAuth, createPost);

// Delete a post
router.delete("/delete_post/:id", deletePost);

// Update a post
router.patch("/update_post/:id", updatePost);

module.exports = router;
