const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const postSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        body: {
            type: String,
            required: true,
        },
        author: {
            type: String,
            required: true,
        },

        // On process of Thinking out loudddd, ask chatgpt for additional info

        // likes: [],
        // comments: [],
    },
    { timestamps: true }
);

module.exports = mongoose.model("Post", postSchema);
