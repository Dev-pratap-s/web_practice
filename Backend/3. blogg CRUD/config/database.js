const mongoose = require('mongoose')
require("dotenv").config()

const dbconnect= ()=>{
    mongoose.connect(process.env.DATABASE_URL)
    .then(()=>{
        console.log("db ka connection i ssuccess")
    })
    .catch((error)=>{
        console.log("isse in db connnection")
        console.error(error.message)
        process.exit(1)
    })
}

module.exports= dbconnect;