const express = require("express");
const {
    getUsers,
    deleteUser,
    deletePost,
    banUser,
} = require("../controllers/adminController");
const router = express.Router();

// Get all users
router.get("/users", getUsers);

// Delete a user
router.delete("/delete_account/:id", deleteUser);

// Delete a post
router.delete("/delete_post/:id", deletePost);

// Ban a user
router.patch("/ban_user/:id", banUser);

module.exports = router;
