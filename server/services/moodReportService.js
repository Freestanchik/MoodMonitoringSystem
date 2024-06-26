import moodReportRepository from "../repositories/moodReportRepository.js";
import axios from "axios";


const moodReportService = {
    getAllReports: async () => {
        try {
            const reports = await moodReportRepository.getAllReports();

            const predictionsResponse = await axios.post(process.env.AI_MODULE_URL, reports);
            const predictions = predictionsResponse.data;

            return {reports, predictions};
        } catch (error) {
            console.error('Error in getAllReports:', error);
            throw error;
        }
    },

    getReportByOwnerId: async (ownerId) => {
        return moodReportRepository.findByOwnerId(ownerId)
    },

    getReportByDate: async (date) => {
        return moodReportRepository.findByDate(date)
    },

    createReport: async (ownerId, data) => {
        const {
            rate,
            isCrunch,
            isSick,
            isConflict,
            isPersonal,
            additionalInfo,
        } = data;

        let reportDate = new Date();

        const reportData = {
            rate,
            reportDate,
            isCrunch,
            isSick,
            isConflict,
            isPersonal,
            additionalInfo,
        }

        return await moodReportRepository.createReport(ownerId, reportData)
    }


}

export default moodReportService;