import axios from "axios";

const API_URL = 'http://localhost:7000/api/report/'

const getAllReports = async () => {
    const response = await axios.get(API_URL + 'reports')
    return response.data
}

const getReportByOwnerId = async (ownerId) => {
    const response = await axios.get(API_URL + 'reports/' + ownerId)
    return response.data
}

const createReport = async (reportData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }

    const response = await axios.post(API_URL + 'create',reportData, config)

    return response.data
}

const moodReportService = {
    getAllReports,
    getReportByOwnerId,
    createReport
}

export default moodReportService