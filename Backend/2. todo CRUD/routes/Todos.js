const express = require('express');
const router = express.Router();

// Import controllers
const { createTodo } = require("../controllers/createTodo");
const { getTodo, getTodoById } = require("../controllers/getTodo");
const { updatetodo } = require("../controllers/updatetodo");
const { deletetodo} = require("../controllers/deletetodo");


// Define API routes
router.post("/createTodo", createTodo);
router.get("/getTodo", getTodo);
router.get("/getTodo/:id", getTodoById);
router.put("/updateTodo/:id", updatetodo); 
router.delete("/deletetodo/:id", deletetodo); 


module.exports = router;
