const Thread = require("../models/Course")

exports.createThread = async (req, res) => {
    try {
        let {
            title,
            description,
        } = req.body
    } catch (error) {
        console.error(error)
        res.status(500).json({
            success: false,
            message: "Failed to create thread",
            error: error.message,
        })
    }
}