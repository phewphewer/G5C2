const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "1d" });
};

// login user
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.create_account(username, email, password);

    const token = createToken(user._id);

    res.status(200).json({ login, token });
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

    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { create_account_user, loginUser };
