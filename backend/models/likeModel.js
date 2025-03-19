const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const likeSchema = new Schema(
    {
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

module.exports = mongoose.model("Like", likeSchema);
