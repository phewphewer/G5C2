const Like = require("../models/likeModel");
const mongoose = require("mongoose");

// Add a like to a post
const addLike = async (req, res) => {
    const { postId } = req.params;
    const userId = req.user._id;

    if (!mongoose.Types.ObjectId.isValid(postId)) {
        return res.status(400).json({ error: "Invalid post ID" });
    }

    try {
        const existingLike = await Like.findOne({ user: userId, post: postId });
        if (existingLike) {
            return res
                .status(400)
                .json({ error: "You already liked this post" });
        }

        const like = await Like.create({ user: userId, post: postId });
        res.status(201).json(like);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
// Remove a like from a post
const removeLike = async (req, res) => {
    const { postId } = req.params;
    const userId = req.user._id;

    if (!mongoose.Types.ObjectId.isValid(postId)) {
        return res.status(400).json({ error: "Invalid post ID" });
    }

    try {
        const like = await Like.findOneAndDelete({
            user: userId,
            post: postId,
        });
        if (!like) {
            return res.status(404).json({ error: "Like not found" });
        }

        res.status(200).json({ message: "Like removed" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { addLike, removeLike };
