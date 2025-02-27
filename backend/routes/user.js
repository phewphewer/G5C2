const express = require("express");
const {
    createUser,
    getUser,
    deleteUser,
    updateUser,
} = require("../controllers/userController");
const Book = require("../models/userModel");
const router = express.Router();

// Get a single book
router.get("/:id", getUser);

// Post a new book
router.post("/", createUser);

// Delete a book
router.delete("/:id", deleteUser);

// Update a book
router.patch("/:id", updateUser);

module.exports = router;
