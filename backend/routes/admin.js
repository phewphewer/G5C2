const express = require("express");
const { getUsers, deleteUser } = require("../controllers/adminController");
const router = express.Router();

// Get all user
router.get("/users", getUsers);

// Delete a user
router.delete("/delete_account/:id", deleteUser);

module.exports = router;
