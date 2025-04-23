const express = require('express');
const app = express();

// Load config from .env file
require("dotenv").config();

// Middleware to parse JSON request body
app.use(express.json());

// Import routes
const todoRoutes = require('./routes/Todos');

// Mount the todo API routes — Example: http://localhost:3000/api/v1/createTodo
app.use("/api/v1", todoRoutes);

// Start the server
const PORT = process.env.PORT || 3000; // 👈 
app.listen(PORT, () => {
    console.log(`Server is started on port ${PORT}`);
});


//connect to the databse

const dbConnect = require("./config/database")
dbConnect();

//deflaut route tumahre upper hai
app.get("/",(req,res)=>{
    res.send(`<h1>this is homepage body</h1>`)
})