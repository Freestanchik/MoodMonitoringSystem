import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getUser} from "../store/slices/userSlice.js";
import {getReportByOwnerId} from "../store/slices/moodReportSlice.js";
import MoodReportCard from "./MoodReportCard.jsx";
import MoodReportForm from "./MoodReportForm.jsx";

const EmployeeMoodList = ({user}) => {

    const dispatch = useDispatch()

    const {employeeReports, isSuccess} = useSelector((state) => state.report)

    useEffect(() => {
        dispatch(getReportByOwnerId({ownerId: user._id}))
        console.log(employeeReports)
    }, []);

    const today = new Date().toISOString().split('T')[0]; // Get today's date in 'YYYY-MM-DD' format

    const hasReportedToday = employeeReports.some(report => {
        const reportDate = new Date(report.reportDate).toISOString().split('T')[0];
        return reportDate === today;
    });
    console.log(hasReportedToday)

    return (
        <div className="w-full">
            {hasReportedToday ? (
                <div className="text-center text-gray-800 p-6 bg-blue-100 rounded-lg shadow-md">
                    <p className="text-2xl font-semibold mb-2">Thank you for your feedback!</p>
                    <p className="text-lg">Please come back tomorrow.</p>
                </div>
            ) : (
                <MoodReportForm/>
            )} {employeeReports.map((report, index) => (
            <MoodReportCard key={index} report={report}/>
        ))}
        </div>
    );
}

export default EmployeeMoodList
