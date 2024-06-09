import asyncHandler from "express-async-handler";
import userService from "../services/userService.js";

export const getCurrentUser = asyncHandler(async (req, res) => {
    try {
        const currentUser = await userService.getCurrentUser(req.user);
        res.status(200).json(currentUser);
    } catch (error) {
        res.status(400).json({error: error.message});
    }

});

export const getAllUsers = asyncHandler(async (req, res) => {
    try {
        const users = await userService.getAllUsers();
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json({error: error.message});
    }

});

const userController = {
    getCurrentUser,
    getAllUsers,
};

export default userController
