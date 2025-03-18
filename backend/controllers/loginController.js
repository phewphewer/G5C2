// const User = require("../models/loginModel");
// const mongoose = require("mongoose");

// // Get a single user
// const getUser = async (req, res) => {
//     const { id } = req.params;

//     if (!mongoose.Types.ObjectId.isValid(id)) {
//         return res.status(404).json({ error: "No such User" });
//     }
//     const user = await User.findById(id).select("-password");

//     if (!user) {
//         return res.status(404).json({ error: "No such User" });
//     }

//     res.status(200).json(user);
// };

// module.exports = {
//     getUser,
// };
