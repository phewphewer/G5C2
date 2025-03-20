const Post = require("../models/postModel");
const user = require("../models/userModel");
const Like = require("../models/likeModel");
const Comment = require("../models/commentsModel");
const mongoose = require("mongoose");

// Get All posts of user
const getPostsId = async (req, res) => {
    try {
        const userId = req.params.userId;

        if (!mongoose.Types.ObjectId.isValid(userId)) {
            return res.status(400).json({ message: "Invalid user ID" });
        }

        // Find all posts of the user
        const posts = await Post.find({ user: userId }).populate(
            "user",
            "username email"
        );

        if (!posts || posts.length === 0) {
            return res
                .status(404)
                .json({ message: "No posts found for this user" });
        }

        // Add likes and comments count for each post
        const postsWithCounts = await Promise.all(
            posts.map(async (post) => {
                const likeCount = await Like.countDocuments({ post: post._id });
                const commentCount = await Comment.countDocuments({
                    post: post._id,
                });

                return {
                    ...post.toObject(),
                    likeCount,
                    commentCount,
                };
            })
        );

        const totalPosts = await Post.countDocuments({ user: userId });

        res.json({ totalPosts, posts: postsWithCounts });
    } catch (error) {
        console.error("Error fetching posts:", error);
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

// Create post that's tied to the userid
// const createPostId = async (req, res) => {
// try {
//   const { title, body, userId } = req.body;
//   const user = await User.findById(userId);
//   if (!user) {
//     return res.status(404).json({ message: "User not found" });
//   }
//   const newPost = new Post({
//     title,
//     body,
//     user: userId,
//   });
//   const savedPost = await newPost.save();
//   res.status(201).json(savedPost);
// } catch (error) {
//   res.status(500).json({ message: "Server error", error });
// }
// };

// Get a single post
const getPost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such Post" });
    }

    try {
        const post = await Post.findById(id).populate("user", "username email");

        if (!post) {
            return res.status(404).json({ error: "No such user Post" });
        }

        const likeCount = await Like.countDocuments({ post: post._id });
        const commentCount = await Comment.countDocuments({ post: post._id });

        res.status(200).json({
            ...post.toObject(),
            likeCount,
            commentCount,
        });
    } catch (error) {
        console.error("Error fetching post:", error);
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

// Create new post
const createPost = async (req, res) => {
    const { title, body } = req.body;
    const userId = req.user._id;

    // Add the post to the database
    try {
        const post = await Post.create({ title, body, user: userId });
        res.status(200).json(post);
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

    try {
        const post = await Post.findOneAndDelete({ _id: id });

        if (!post) {
            return res.status(404).json({ error: "No such user Post" });
        }

        // Delete all comments from DB
        await Comment.deleteMany({ post: id });

        // Delete all likes from DB
        await Like.deleteMany({ post: id });

        res.status(200).json({
            message: "Post and associated comments deleted successfully",
        });
    } catch (error) {
        console.error("Error deleting post:", error);
        res.status(500).json({ error: "Server error" });
    }
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
        return res.status(404).json({ error: "No such user Post" });
    }
    res.status(200).json(post);
};

module.exports = {
    createPost,
    getPost,
    deletePost,
    updatePost,
    getPostsId,
    // createPostId,
};
