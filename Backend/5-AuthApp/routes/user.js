// Express import kara aur Router banaya
const express = require("express");
const router = express.Router();

// ✅ Controllers import kiye (Auth.js se)
const { login, signup } = require("../controllers/Auth");

// ✅ Middleware import kiya (auth.js se)
const { auth, isStudent, isAdmin } = require("../middlewares/auth");


// ==========================
// 🔐 PUBLIC ROUTES (Signup & Login)
// ==========================

// 📩 Signup route: new user registration
router.post("/signup", signup);

// 🔑 Login route: existing user login
router.post("/login", login);


// ==========================
// 🔐 PROTECTED ROUTES (Token required)
// ==========================

// ✅ Testing route (sirf auth lagaya gaya hai)
// Agar valid token hoga toh access milega
router.get("/test", auth, (req, res) => {
    res.json({
        success: true,
        message: "Welcome to protected route for test",
    });
});


// ✅ Student route: sirf Students role waale log access kar sakte hain
router.get("/student", auth, isStudent, (req, res) => {
    res.json({
        success: true,
        message: "Welcome to protected route for student",
    });
});


// ✅ Admin route: sirf Admin role waale log access kar sakte hain
router.get("/admin", auth, isAdmin, (req, res) => {
    res.json({
        success: true,
        message: "Welcome to protected route for admin",
    });
});


// ✅ Router export karo so it can be used in main app
module.exports = router;
