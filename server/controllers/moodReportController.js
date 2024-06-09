import asyncHandler from 'express-async-handler';
import moodReportService from "../services/moodReportService.js";

export const getAllReports = asyncHandler(async (req, res) => {
    try {
        const {reports, predictions}= await moodReportService.getAllReports();
        console.log(predictions);
        res.status(200).json({reports, predictions});
    } catch (error) {
        res.status(400).json({error: error.message});
    }
});

export const getReportByOwnerId = asyncHandler(async (req, res) => {
    try {
        const {id} = req.params;
        const reports= await moodReportService.getReportByOwnerId(id);
        res.status(200).json(reports);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
});

export const getReportByDate = asyncHandler(async (req, res) => {
    try {
        const {date} = req.params;
        const reports= await moodReportService.getReportByDate(date);
        res.status(200).json(reports);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
});


export const createReport = asyncHandler(async (req, res) => {
    const {id: ownerId} = req.user;
    try {
        const report = await moodReportService.createReport(ownerId, req.body);
        res.status(200).json(report);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
});


const moodReportController = {
    getAllReports,
    getReportByDate,
    createReport,
    getReportByOwnerId,
};

export default moodReportController;
