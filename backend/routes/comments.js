const express = require("express");
const {
    addComment,
    deleteComment,
    editComment,
    getComments,
} = require("../controllers/commentsController");
const router = express.Router();

// Add a comment
router.post("/add_comment", addComment);

router.delete("/delete_comment/:id", deleteComment);

router.put("/edit_comment/:id", editComment);

router.get("/post/:postId/comments", getComments);

module.exports = router;
