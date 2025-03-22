const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

const createToken = (_id) => {
    return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "1d" });
};

// login user
const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.login(email, password);

        const token = createToken(user._id);

        res.status(200).json({ email, username: user.username, token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
// create_account user
const create_account_user = async function (req, res) {
    const { username, email, password } = req.body;

    try {
        const user = await User.create_account(username, email, password);

        const token = createToken(user._id);

        res.status(200).json({ email, username: user.username, token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get the username of a user
const getUsername = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: "Invalid user ID" });
    }

    try {
        const user = await User.findById(id).select("username");

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        res.status(200).json({ username: user.username });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { create_account_user, loginUser, getUsername };
