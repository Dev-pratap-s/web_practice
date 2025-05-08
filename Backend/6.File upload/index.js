//App create 
const express = require('express')
const app= express();

//port find krna
require('dotenv').config();
const PORT = process.env.PORT || 3000;

//middleware add krna hai
app.use(express.json(
    {
        useTempFiles : true,
        tempFileDir : '/tmp/'
    }
));
const fileupload = require('express-fileupload');
app.use(fileupload());

// db se connnect krna hai
const db = require("./config/database");
db.connect();

//cloud se connnect krna hai
const cloudinary= require('./config/cloudinary');
cloudinary.cloudinaryConnect();

//api route mount krna hai 
const upload = require('./routes/FileUpload');
app.use('/api/v1/upload',upload)

//activate server
app.listen(PORT, ()=>{
    console.log(`app is running at ${PORT}`); 
    
})