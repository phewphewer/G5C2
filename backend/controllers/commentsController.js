const Comment = require("../models/commentsModel");
const mongoose = require("mongoose");

// For checking Id validity
const isValidObjectId = (id) => mongoose.Types.ObjectId.isValid(id);

// Add a comment
const addComment = async (req, res) => {
    const { text, postId } = req.body;
    const userId = req.user._id;

    console.log("Received postId:", postId);

    if (!isValidObjectId(postId)) {
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

    if (!isValidObjectId(id)) {
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

const editComment = async (req, res) => {
    const { id } = req.params;
    const { text } = req.body;
    const userId = req.user._id;

    if (!isValidObjectId(id)) {
        return res.status(400).json({ error: "Invalid comment ID" });
    }

    try {
        const comment = await Comment.findById(id);

        if (!comment) {
            return res.status(404).json({ error: "Comment not found" });
        }

        if (comment.user.toString() !== userId.toString()) {
            return res
                .status(403)
                .json({ error: "Unauthorized to edit this comment" });
        }

        // Edit the comment
        comment.text = text;
        await comment.save();

        res.status(200).json({
            message: "Comment updated successfully",
            comment,
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getComments = async (req, res) => {
    const { postId } = req.params;

    if (!isValidObjectId(postId)) {
        return res.status(400).json({ error: "Invalid post ID" });
    }

    try {
        const comments = await Comment.find({ post: postId })
            .populate("user", "username")
            .sort({ createdAt: -1 });

        res.status(200).json({ comments });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { addComment, deleteComment, editComment, getComments };
