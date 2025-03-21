const express = require("express");
const {
    getUsers,
    getPosts,
    getUser,
    deleteUser,
    deletePost,
    banUser,
} = require("../controllers/adminController");
const router = express.Router();

// Get all users
router.get("/users", getUsers);

// Get all posts
router.get("/posts", getPosts);

// Get a user
router.get("/user/:id", getUser);

// Delete a user
router.delete("/delete_account/:id", deleteUser);

// Delete a post
router.delete("/delete_post/:id", deletePost);

// Ban a user
router.patch("/ban_user/:id", banUser);

module.exports = router;
