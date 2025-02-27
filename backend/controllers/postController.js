const Post = require("../models/userModel");
const mongoose = require("mongoose");

// Get a single
const getPost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such Post" });
    }
    const post = await Post.findById(id);

    if (!post) {
        return res.status(404).json({ error: "No such Post" });
    }

    res.status(200).json(post);
};

// Create new post
const createPost = async (req, res) => {
    const { username, email, password } = req.body;

    //  add doc to db
    try {
        const posts = await User.create({ username, email, password });
        res.status(200).json(posts);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete a post
const deletePost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such Post" });
    }

    const post = await Post.findOneAndDelete({ _id: id });

    if (!post) {
        return res.status(404).json({ error: "No such Post" });
    }

    res.status(200).json(post);
};

// Update a Post
const updatePost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such Post" });
    }

    const post = await Post.findByIdAndUpdate(
        { _id: id },
        {
            ...req.body,
        }
    );
    if (!post) {
        return res.status(404).json({ error: "No such Post" });
    }
    res.status(200).json(post);
};

module.exports = {
    createPost,
    getPost,
    deletePost,
    updatePost,
};
