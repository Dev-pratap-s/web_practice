const express = require("express");
const { skipMiddlewareFunction } = require("mongoose");
const app = express()

require("dotenv").config()
const PORT = process.env.PORT || 3000;

//Middleware
app.use(express.json())

const blog = require('./routes/blog')
//mount
app.use("/api/v1",blog)

const connectionwithdb = require("./config/database")
connectionwithdb()


app.listen(PORT,()=>{
    console.log(`app is start at ${PORT}`)
})


app.get('/',(req,res)=>{
    res.send(`<h1>this is homepage baby</h1>`)
})