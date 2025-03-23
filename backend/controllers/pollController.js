const Post = require("../models/postModel");
const fetchLatestPosts = async (req, res) => {
  try {
    // Fetch the latest posts, sort by creation date, and limit the number of posts (e.g., 10 posts)
    const posts = await Post.find().sort({ createdAt: -1 }).limit(10); // Example: fetch the latest 10 posts
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: "Error fetching posts" });
  }
};

module.exports = { fetchLatestPosts };
