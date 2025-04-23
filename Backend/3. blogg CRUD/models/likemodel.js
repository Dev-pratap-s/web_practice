//import mongooose
const {mongoose } = require("mongoose");



//route handler
const likeSchema  = new mongoose.Schema({
    ///konse post pr comment kr rha h
    posts:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Post"
    },
    //// kon commment kr rha h
    user:{
        type:String,
        required:true,
    },
    
})

///export//
module.exports= mongoose.model("Like",likeSchema)