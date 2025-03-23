const express = require("express");
const { addLike, removeLike } = require("../controllers/likeController");
const router = express.Router();

// Add a like
router.post("/addlike/:postId", addLike);

// Remove a like
router.post("/removelike/:postId", removeLike);

module.exports = router;
