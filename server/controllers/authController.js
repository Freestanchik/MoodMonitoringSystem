import asyncHandler from 'express-async-handler'
import authService from "../services/authService.js";

const registerUser = asyncHandler(async (req, res) => {
    try {
        console.log("hm")
        const token = await authService.registerUser(req.body);
        res.status(201).json(token);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
});

const loginUser = asyncHandler(async (req, res) => {
    try {
        const {email, password} = req.body;
        const {token, isAdmin} = await authService.loginUser(email, password);
        res.json({token, isAdmin});
    } catch (error) {
        res.status(400).json({error: error.message});
    }
});

const authController = {
    registerUser,
    loginUser,
};

export default authController