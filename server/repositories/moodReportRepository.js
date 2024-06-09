import moodReportModel from "../models/moodReportModel.js";
import MoodReportModel from "../models/moodReportModel.js";

const moodReportRepository = {
    getAllReports: async () => {
        return moodReportModel.aggregate([
            {
                $addFields: {
                    formattedDate: {$dateToString: {format: "%d.%m.%Y", date: "$reportDate"}},
                    reportDateOnly: {
                        $dateFromParts: {
                            year: {$year: "$reportDate"},
                            month: {$month: "$reportDate"},
                            day: {$dayOfMonth: "$reportDate"}
                        }
                    }
                }
            },
            {
                $group: {
                    _id: "$formattedDate",
                    isCrunch: {$sum: {$cond: ["$isCrunch", 1, 0]}},
                    isSick: {$sum: {$cond: ["$isSick", 1, 0]}},
                    isConflict: {$sum: {$cond: ["$isConflict", 1, 0]}},
                    isPersonal: {$sum: {$cond: ["$IsPersonal", 1, 0]}},
                    rate: {$avg: "$rate"},
                    reportDateOnly: {$first: "$reportDateOnly"}
                }
            },
            {
                $sort: {reportDateOnly: 1}
            },
            {
                $project: {
                    _id: 0,
                    reportDate: "$_id",
                    rate: 1,
                    isCrunch: 1,
                    isSick: 1,
                    isConflict: 1,
                    isPersonal: 1
                }
            }
        ]);
    },
    findByOwnerId: async (ownerId) => {
        return moodReportModel
            .find({ owner: ownerId })
            .populate('owner', 'login') // Populate the 'owner' field with the 'login' property
            .sort({ reportDate: -1 });
    },
    findByDate: async (date) => {

        // Convert the date string "dd.mm.yyyy" to a Date object
        const [day, month, year] = date.split('.').map(Number);
        const targetDate = new Date(year, month - 1, day);

        // Get the start and end of the target date
        const startOfDay = new Date(year, month - 1, day);
        const endOfDay = new Date(year, month - 1, day + 1);

        // Query for reports for the specified day
        const reports = await MoodReportModel.find({
            reportDate: {
                $gte: startOfDay,
                $lt: endOfDay
            }
        });

        return reports;
    },
    createReport: async (ownerId, reportData) => {
        return moodReportModel.create({
            owner: ownerId,
            ...reportData,
        });
    }
}
export default moodReportRepository;