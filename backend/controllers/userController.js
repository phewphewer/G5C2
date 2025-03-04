const User = require("../models/userModel");
const mongoose = require("mongoose");

// Get all users
const getUsers = async (req, res) => {
    const users = await User.find({}).sort({ createdAt: -1 });

    res.status(200).json(users);
};

// Get a single user
const getUser = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such User" });
    }
    const user = await User.findById(id);

    if (!user) {
        return res.status(404).json({ error: "No such User" });
    }

    res.status(200).json(user);
};

// Create new user
const createUser = async (req, res) => {
    const { username, email, password } = req.body;

    //  add doc to db
    try {
        const users = await User.create({ username, email, password });
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete a user
const deleteUser = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such User" });
    }

    const user = await User.findOneAndDelete({ _id: id });

    if (!user) {
        return res.status(404).json({ error: "No such User" });
    }

    res.status(200).json(user);
};

// Update a User
const updateUser = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such User" });
    }

    const user = await User.findByIdAndUpdate(
        { _id: id },
        {
            ...req.body,
        }
    );
    if (!user) {
        return res.status(404).json({ error: "No such User" });
    }
    res.status(200).json(user);
};

module.exports = {
    createUser,
    getUsers,
    getUser,
    deleteUser,
    updateUser,
};
