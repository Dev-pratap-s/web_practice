const bcrypt = require("bcrypt");
const User = require('../models/user');
const jwt = require('jsonwebtoken');
require("dotenv").config();


//SIGNUP Controller

exports.signup = async (req, res) => {
    try {
        //  1. Client se data le lo
        const { name, email, password, role } = req.body;

        //  2. Check karo ki user already exists toh nahi
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "User Already Exists",
            });
        }

        //  3. Password ko hash (encrypt) kar lo using bcrypt 
        let hashedPassword;
        try {
            hashedPassword = await bcrypt.hash(password, 10); // 10 = salt rounds
        } catch (err) {
            return res.status(500).json({
                success: false,
                message: "Error in hashing password",
            });
        }

        //  4. User ko create karo DB me
        const user = await User.create({
            name,
            email,
            password: hashedPassword,
            role,
        });

        //  5. Success response bhejo
        return res.status(200).json({
            success: true,
            message: "User Created Successfully",
            data: user,
        });

    } catch (err) {
        console.error(err);
        return res.status(500).json({
            success: false,
            message: "User cannot be registered. Please try again later",
        });
    }
};


// LOGIN Controller
exports.login = async (req, res) => {
    try {
        //  1. Data lo from frontend
        const { email, password } = req.body;

        //  2. Validation check
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Please fill all the details carefully",
            });
        }

        //  3. User exist karta hai ya nahi check karo
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({
                success: false,
                message: "User is not registered",
            });
        }

        // 4. Payload banate hain JWT token ke liye
        const payload = {
            email: user.email,
            id: user._id,
            role: user.role,
        };

        //  5. Password ko compare kar rahe ho with bcrypt
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) {
            return res.status(403).json({
                success: false,
                message: "Password incorrect",
            });
        }

        //  6. JWT token generate karo
        const token = jwt.sign(payload, process.env.JWT_SECRET, {
            expiresIn: "2h", // Token 2 ghante valid hoga
        });

        //  7. Token aur password hide karne ke liye user ko plain object me convert karo
        user = user.toObject(); // Mongoose se normal object me
        user.token = token;     // Token add karo
        user.password = undefined; // Password hata do

        //  8. Cookie set karo with token
        const options = {
            expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), // 3 din
            httpOnly: true, // Security ke liye
        };

        //  9. Success response bhejo
        return res.cookie("token", token, options).status(200).json({
            success: true,
            token,
            user,
            message: "User logged in successfully",
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Login failed. Please try again later",
        });
    }
};
