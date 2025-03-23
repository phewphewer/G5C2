const Post = require("../models/postModel");
const Like = require("../models/likeModel");
const Comment = require("../models/commentsModel");
const mongoose = require("mongoose");

// For checking Id validity
const isValidObjectId = (id) => mongoose.Types.ObjectId.isValid(id);

// For getting like & comment counts
const getCounts = async (postId) => {
    const likeCount = await Like.countDocuments({ post: postId });
    const commentCount = await Comment.countDocuments({ post: postId });
    return { likeCount, commentCount };
};

// Get Posts - Home page
const getPosts = async (req, res) => {
    try {
        const userId = req.user._id;
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const skip = (page - 1) * limit;

        const posts = await Post.find({})
            .skip(skip)
            .limit(limit)
            .sort({ createdAt: -1 })
            .populate("user", "username");

        const postsWithCounts = await Promise.all(
            posts.map(async (post) => {
                const likeCount = await Like.countDocuments({ post: post._id });
                const commentCount = await Comment.countDocuments({
                    post: post._id,
                });
                const isLiked = await Like.exists({
                    post: post._id,
                    user: userId,
                }); // Checking if the user has liked the post
                return {
                    ...post.toObject(),
                    likeCount,
                    commentCount,
                    isLiked: !!isLiked,
                };
            })
        );

        res.status(200).json({ getPosts: postsWithCounts });
    } catch (error) {
        console.error("Error in getPosts:", error.message);
        res.status(500).json({ error: "Server error" });
    }
};

// Get all posts of a user
const getPostsId = async (req, res) => {
    try {
        const userId = req.params.userId;

        if (!isValidObjectId(userId)) {
            return res.status(400).json({ message: "Invalid user ID" });
        }

        const posts = await Post.find({ user: userId }).populate(
            "user",
            "username email"
        );

        if (!posts.length) {
            return res
                .status(404)
                .json({ message: "No posts found for this user" });
        }

        const postsWithCounts = await Promise.all(
            posts.map(async (post) => ({
                ...post.toObject(),
                ...(await getCounts(post._id)),
            }))
        );

        const totalPosts = posts.length;

        res.json({ totalPosts, posts: postsWithCounts });
    } catch (error) {
        console.error("Error fetching posts:", error);
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

// Get a single post
const getPost = async (req, res) => {
    try {
        const { id } = req.params;

        if (!isValidObjectId(id)) {
            return res.status(404).json({ error: "Invalid post ID" });
        }

        const post = await Post.findById(id).populate("user", "username email");

        if (!post) {
            return res.status(404).json({ error: "Post not found" });
        }

        const counts = await getCounts(post._id);

        res.status(200).json({ ...post.toObject(), ...counts });
    } catch (error) {
        console.error("Error fetching post:", error);
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

// Create a new post
const createPost = async (req, res) => {
    try {
        const { title, body } = req.body;
        const userId = req.user._id;

        const post = await Post.create({ title, body, user: userId });
        res.status(201).json(post);
    } catch (error) {
        console.error("Error creating post:", error);
        res.status(400).json({ error: error.message });
    }
};

// Delete a post
const deletePost = async (req, res) => {
    try {
        const { id } = req.params;

        if (!isValidObjectId(id)) {
            return res.status(404).json({ error: "Invalid post ID" });
        }

        const post = await Post.findByIdAndDelete(id);

        if (!post) {
            return res.status(404).json({ error: "Post not found" });
        }

        await Comment.deleteMany({ post: id });
        await Like.deleteMany({ post: id });

        res.status(200).json({
            message: "Post and associated data deleted successfully",
        });
    } catch (error) {
        console.error("Error deleting post:", error);
        res.status(500).json({ error: "Server error" });
    }
};

// Update a post
const updatePost = async (req, res) => {
    try {
        const { id } = req.params;

        if (!isValidObjectId(id)) {
            return res.status(404).json({ error: "Invalid post ID" });
        }

        const post = await Post.findByIdAndUpdate(id, req.body, { new: true });

        if (!post) {
            return res.status(404).json({ error: "Post not found" });
        }

        res.status(200).json(post);
    } catch (error) {
        console.error("Error updating post:", error);
        res.status(500).json({ error: "Server error" });
    }
};

module.exports = {
    createPost,
    getPosts,
    getPost,
    deletePost,
    updatePost,
    getPostsId,
};
