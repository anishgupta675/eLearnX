const Comment = require("../models/Comment")

exports.createComment = async (req, res) => {
    try {
        let {
            body,
        } = req.body
    } catch (error) {
        console.error(error)
        res.status(500).json({
            success: false,
            message: "Failed to create comment",
            error: error.message,
        })
    }
}