// JWT library import kiya to sign and verify tokens
const jwt = require("jsonwebtoken");

// dotenv use kiya so that we can use .env file variables
require("dotenv").config();


// ==========================
// 🔐 AUTH MIDDLEWARE
// ==========================

exports.auth = (req, res, next) => {
    try {
        // ✅ Step 1: Token ko extract karo
        // Token body se aa raha hai. (You can also take from headers/cookies) ab header me se la rhe hai
        const token = req.header("Authorization").replace("Bearer ", "");


        // ❌ Token agar missing hai, toh unauthorized response bhejo
        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Token missing",
            });
        }

        try {
            // ✅ Step 2: Token ko verify karo using secret key from .env
            const decode = jwt.verify(token, process.env.JWT_SECRET);

            // ✅ Step 3: Decoded token (user info) ko request object me store karo
            // Taaki agla middleware use kar sake
            req.user = decode;

            // (Optional) decoded object ko console me print karo
            console.log(decode);
        } catch (error) {
            // ❌ Agar token invalid hai (e.g. tampered or expired)
            return res.status(401).json({
                success: false,
                message: "Token is invalid",
             });
        }

        // ✅ Agar sab sahi hai to next middleware me jao
        next();
    } catch (error) {
        // ❌ Koi aur issue aaya while processing
        return res.status(500).json({
            success: false,
            message: "Something went wrong while verifying the token",
        });
    }
};


// ==========================
// 🧑‍🎓 isStudent MIDDLEWARE
// ==========================

exports.isStudent = (req, res, next) => {
    try {
        // ✅ Check karo user ka role "Students" hai ya nahi
        if (req.user.role !== "Students") {
            return res.status(401).json({
                success: false,
                message: "This is a protected route for students only",
            });
        }

        // ✅ Agar role match ho gaya, to agle middleware/handler me jao
        next();
    } catch (error) {
        // ❌ Agar role check me koi dikkat aayi
        return res.status(500).json({
            success: false,
            message: "User role cannot be matched",
        });
    }
};


// ==========================
// 👑 isAdmin MIDDLEWARE
// ==========================

exports.isAdmin = (req, res, next) => {
    try {
        // ✅ Check karo user ka role "Admin" hai ya nahi
        if (req.user.role !== "Admin") {
            return res.status(401).json({
                success: false,
                message: "This is a protected route for admins only",
            });
        }

        // ✅ Agar admin role match ho gaya, to continue
        next();
    } catch (error) {
        // ❌ Agar koi error aaya during role check
        return res.status(500).json({
            success: false,
            message: "User role cannot be matched",
        });
    }
};
