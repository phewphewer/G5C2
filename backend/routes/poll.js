const express = require("express");
const { fetchLatestPosts } = require("../controllers/pollController");
const router = express.Router();
// Polling route that fetches the latest posts
router.get("/posts/poll", fetchLatestPosts); // Define the route for polling

module.exports = router;
