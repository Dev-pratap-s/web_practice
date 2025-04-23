const Todo = require("../models/Todo");

exports.updatetodo = async (req, res) => {
  try {
    const { id } = req.params; // req se id le rahe
    const { title, description } = req.body; // body se data le rahe




    ///Model.findByIdAndUpdate(id, updateData, options)
    const todo = await Todo.findByIdAndUpdate(
      {_id:id}, // id directly dete hain
      { title, description, updatedAt: Date.now() },
      
    );

    if (!todo) {
      return res.status(404).json({
        success: false,
        message: "Todo not found",
      });
    }

    res.status(200).json({
      success: true,
      data: todo,
      message: "Todo updated successfully",
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: err.message,
    });
  }
};
