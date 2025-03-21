const Admin = require("../models/adminModel");
const User = require("../models/userModel");
const Post = require("../models/postModel");
const Like = require("../models/likeModel");
const Comment = require("../models/commentsModel");
const mongoose = require("mongoose");

// For checking Id validity
const isValidObjectId = (id) => mongoose.Types.ObjectId.isValid(id);

// Get all users
const getUsers = async (req, res) => {
    try {
        const users = await User.find({}).sort({ createdAt: -1 });
        const totalUsers = await User.countDocuments({});

        res.status(200).json({ totalUsers, users });
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
};

// Get all posts
const getPosts = async (req, res) => {
    try {
        const posts = await Post.find({}).sort({ createdAt: -1 });
        const totalPosts = await Post.countDocuments({});

        res.status(200).json({ totalPosts, posts });
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
};

// Get a user
const getUser = async (req, res) => {
    const { id } = req.params;

    if (!isValidObjectId(id)) {
        return res.status(404).json({ error: "No such User" });
    }
    const user = await User.findById(id)
        .select("likeCount")
        .select("commentCount")
        .select("postCount");

    if (!user) {
        return res.status(404).json({ error: "No such User" });
    }

    const likeCount = await Like.countDocuments({ user: user._id });
    const commentCount = await Comment.countDocuments({ user: user._id });
    const postCount = await Post.countDocuments({ user: user._id });

    res.status(200).json({
        ...user.toObject(),
        likeCount,
        commentCount,
        postCount,
    });
};

// Delete a registered user
const deleteUser = async (req, res) => {
    const { id } = req.params;

    if (!isValidObjectId(id)) {
        return res.status(404).json({ error: "No such User" });
    }

    const user = await User.findOneAndDelete({ _id: id });

    if (!user) {
        return res.status(404).json({ error: "No such User" });
    }

    res.status(200).json(user);
};

// Delete a post
const deletePost = async (req, res) => {
    const { id } = req.params;

    if (!isValidObjectId(id)) {
        return res.status(404).json({ error: "No such Post" });
    }

    const post = await Post.findOneAndDelete({ _id: id });

    if (!post) {
        return res.status(404).json({ error: "No such Post" });
    }

    res.status(200).json(post);
};

// Ban a user
const banUser = async (req, res) => {
    const { id } = req.params;

    if (!isValidObjectId(id)) {
        return res.status(404).json({ error: "No such User" });
    }

    const user = await User.findByIdAndUpdate(
        { _id: id },
        { banned: true },
        { new: true }
    );

    if (!user) {
        return res.status(404).json({ error: "No such User" });
    }

    res.status(200).json(user);
};

module.exports = {
    getUsers,
    getPosts,
    getUser,
    deleteUser,
    deletePost,
    banUser,
};
