const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Import Routes
const blog = require('./routes/blog');

// Mount Routes
app.use("/api/v1", blog);

// DB Connection
const connectionwithdb = require("./config/database");
connectionwithdb();

// Start server
app.listen(PORT, () => {
    console.log(`App is started at port ${PORT}`);
});

// Homepage Route
app.get('/', (req, res) => {
    res.send(`<h1>This is homepage, baby!</h1>`);
});
