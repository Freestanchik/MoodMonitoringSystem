import express from "express";
import authController from "../controllers/authController.js";
import isAuthorized from "../middlewares/authMiddleware.js";
import userController from "../controllers/userController.js";
import moodReportController from "../controllers/moodReportController.js";

const router = express.Router();

router.post("/auth/register",  authController.registerUser);
router.post("/auth/login", authController.loginUser);

router.get('/user/userData', isAuthorized, userController.getCurrentUser)
router.get('/user/getAll', isAuthorized, userController.getAllUsers)

router.post("/report/create", isAuthorized, moodReportController.createReport)

router.get("/report/reports", moodReportController.getAllReports)
router.get("/report/reports/:id", moodReportController.getReportByOwnerId)

router.get("/report/reportsByDate/:date", moodReportController.getReportByDate)

export default router;