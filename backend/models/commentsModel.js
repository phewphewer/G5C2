const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const commentSchema = new Schema(
    {
        text: { type: String, required: true },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        post: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post",
            required: true,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Comment", commentSchema);
