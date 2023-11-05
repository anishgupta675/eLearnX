const mongoose = require("mongoose")

const commentSchema = new mongoose.Schema(
    {
        body: {
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