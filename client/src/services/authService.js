import axios from 'axios'

const API_URL = 'http://localhost:7000/api/auth/'

const login = async (userData) => {
    const res = await axios.post(API_URL + 'login', userData)

    if (res.data) {
        localStorage.setItem('token', JSON.stringify(res.data.token))
        localStorage.setItem('isAdmin', JSON.stringify(res.data.isAdmin))
    }

    return res.data
}

const logout = async () => {
    localStorage.removeItem('token')
    localStorage.removeItem('isAdmin')
}


const authService = {
    login,
    logout,
}

export default authService