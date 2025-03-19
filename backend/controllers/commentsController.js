const Comment = require("../models/commentsModel");
const mongoose = require("mongoose");

// Add a comment to a post
const addComment = async (req, res) => {
    const { text, postId } = req.body;
    const userId = req.user._id;

    console.log("Received postId:", postId); // Debugging line

    if (!mongoose.Types.ObjectId.isValid(postId)) {
        return res.status(400).json({ error: "Invalid post ID" });
    }

    try {
        const comment = await Comment.create({
            text,
            user: userId,
            post: postId,
        });
        res.status(201).json(comment);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { addComment };
