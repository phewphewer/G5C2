const express = require("express");
const { addComment } = require("../controllers/commentsController");
const router = express.Router();

// Add a comment
router.post("/add_comment", addComment);

module.exports = router;
