// 1. Express ko import kar
const express = require("express");
const app = express();

// 2. Environment variables load kar
require("dotenv").config();
const PORT = process.env.PORT || 4000;

// 3. JSON data parse karne ka middleware
app.use(express.json());

// 4. MongoDB ko connect kar
require("./config/database").connect();

// 5. Routes ko import kar aur mount kar
const user = require("./routes/user");
app.use("/api/v1", user);

// 6. Server ko start kar
app.listen(PORT, () => {
    console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
