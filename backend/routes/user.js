const express = require("express");
const router = express.Router();

// controller functions
const {
    create_account_user,
    loginUser,
} = require("../controllers/userController");

// log in router
router.post("/login", loginUser);

// signup route
router.post("/create_account", create_account_user);

module.exports = router;
