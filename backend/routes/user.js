const express = require("express");
const {
    createUser,
    getUsers,
    getUser,
    deleteUser,
    updateUser,
} = require("../controllers/userController");
const User = require("../models/userModel");
const router = express.Router();

// Get all user
router.get("/users", getUsers);

// Get a single user
router.get("/log_in/:id", getUser);

// Post a new user
router.post("/create_account", createUser);

// Delete a user
router.delete("/delete_account/:id", deleteUser);

// Update a user
router.patch("/:id", updateUser);

// Test test

module.exports = router;
