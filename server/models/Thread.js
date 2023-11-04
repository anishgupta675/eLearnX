const mongoose = require("mongoose")

const threadSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },
        description: {
            type: String,
            required: true,
            trim: true,
        },
        datePosted: {
            type: Date,
            default: Date.now(),
        },
        comments: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Comment",
            },
        ],
    },
    { timestamps: true }
)

module.exports = mongoose.model("thread", threadSchema)