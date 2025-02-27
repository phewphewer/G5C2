const express = require("express");
const {
    createUser,
    getUser,
    deleteUser,
    updateUser,
} = require("../controllers/userController");
const User = require("../models/userModel");
const router = express.Router();

// Get a single book
router.get("/log_in/:id", getUser);

// Post a new book
router.post("/create_account", createUser);

// Delete a book
router.delete("/delete_account/:id", deleteUser);

// Update a book
router.patch("/:id", updateUser);

module.exports = router;
