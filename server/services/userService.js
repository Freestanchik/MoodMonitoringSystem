import userRepository from "../repositories/userRepository.js";

const userService = {
    getCurrentUser: async (user) => {
        if (!user) {
            throw new Error('User not found');
        }

        return user;
    },
    getAllUsers: async () => {
        return await userRepository.getAllUsers()
    },
};

export default userService;