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
    },
    { timestamps: true }
)

module.exports = mongoose.model("thread", threadSchema)