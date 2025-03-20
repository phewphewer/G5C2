const express = require("express");
const router = express.Router();

// controller functions
const {
    create_account_user,
    loginUser,
    getUsername,
} = require("../controllers/userController");

// log in router
router.post("/login", loginUser);

// signup route
router.post("/create_account", create_account_user);

// Get username of a user
router.get("/username/:id", getUsername);

module.exports = router;
