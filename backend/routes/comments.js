const express = require("express");
const {
    addComment,
    deleteComment,
} = require("../controllers/commentsController");
const router = express.Router();

// Add a comment
router.post("/add_comment", addComment);

router.delete("/delete_comment/:id", deleteComment);

module.exports = router;
