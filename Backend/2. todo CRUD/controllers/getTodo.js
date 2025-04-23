const Todo = require("../models/Todo");

exports.getTodo = async (req, res) => {
  try {
    //fetch todo item form db
    const todos = await Todo.find({});

    //response
    res.status(200).json({
      success: true,
      data: todos,
      message: "entire todo fatching",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: err.message,
      error: err.message,
    });
  }
};

exports.getTodoById= async(req,res) =>{
    try{
        //extract todo items basic on id
        const id = req.params.id;
        const todo= await Todo.findById({
            _id:id})
        
        ///data forgiven id not found
        if(!todo){
            return res.status(400).json({
                success:false,
                message:"no data found given id"
            })
        }
        //data for suceesful
        res.status(200).json({
            success:true,
            data:todo,
            message:"todo data is succesfully form id"
        })

    }
    catch(err){

        console.error(err);
        res.status(500).json({
          success: false,
          message: err.message,
          error: err.message,
        });
    }
}