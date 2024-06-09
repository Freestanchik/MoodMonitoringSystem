import axios from "axios";

const API_URL = 'http://localhost:7000/api/user/'


const getUser = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }

    const response = await axios.get(API_URL + 'userData', config)

    return response.data
}

const getAllUsers = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }

    const response = await axios.get(API_URL + 'getAll', config)

    return response.data
}


const userService = {
    getUser,
    getAllUsers,
}
export default userService