const express = require('express');
const app = express();

// Route
app.get("/", (req, res) => {
    res.send("Hello, I am a path");
});

const bodyParser= require('body-parser');
app.use(bodyParser.json())

app.post("/api/car",(req,res)=>{
    const {name, brand} = req.body;
    console.log(name);
    console.log(brand);
    res.send("car is submitted Successfully")
    
    
})

// Server start
app.listen(3000, () => {
    console.log("🚀 Server started on http://localhost:3000");
});
