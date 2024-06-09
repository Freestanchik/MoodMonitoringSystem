import bcrypt from 'bcryptjs'
import {generateJWT} from "../helpers/index.js";
import userRepository from "../repositories/userRepository.js";


const authService = {
    registerUser: async (userData) => {
        const {login, email, password, dateOfBirth, role} = userData;

        if (!login || !email || !password) {
            throw new Error('Додайте всі необхідні поля');
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUserData = {
            email,
            login,
            password: hashedPassword,
            dateOfBirth,
            role,
        }

        const newUser = await userRepository.createUser(newUserData);

        if (!newUser) {
            throw new Error('Неправильні дані користувача');
        }

        return generateJWT(newUser._id);
    },

    loginUser: async (email, password) => {
        if (!email || !password) {
            throw new Error('Додайте всі необхідні поля');
        }

        const user = await userRepository.findByEmail(email);

        if (!user || !(await bcrypt.compare(password, user.password))) {
            throw new Error('Користувача з такими даними не знайдено');
        }

        let isAdmin = false

        if(user.role == "admin"){
            isAdmin = true;
        }

        const token = generateJWT(user._id);

        return {token, isAdmin};
    },
};

export default authService;