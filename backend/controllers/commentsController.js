const Comment = require("../models/commentsModel");
const mongoose = require("mongoose");

// Add a comment
const addComment = async (req, res) => {
    const { text, postId } = req.body;
    const userId = req.user._id;

    console.log("Received postId:", postId);

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

// Delete a comment
const deleteComment = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: "Invalid comment ID" });
    }

    try {
        const comment = await Comment.findByIdAndDelete(id);

        if (!comment) {
            return res.status(404).json({ error: "Comment not found" });
        }

        res.status(200).json({ message: "Comment deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { addComment, deleteComment };
