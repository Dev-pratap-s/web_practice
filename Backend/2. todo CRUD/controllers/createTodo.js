const Todo = require("../models/Todo");

exports.createTodo = async (req, res) => {
    try {
        // extract title and description from request body
        const { title, description } = req.body;

        // create a new todo object and insert in DB
        const response = await Todo.create({ title, description });

        // send a JSON response and a success flag
        res.status(200).json({
            success: true,
            data: response,
            message: "Entry created successfully"
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            data: "Internal server error",
            message: err.message
        });
    }
};
