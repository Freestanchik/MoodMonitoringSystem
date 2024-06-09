import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getUser} from "../store/slices/userSlice.js";
import {getReportByOwnerId} from "../store/slices/moodReportSlice.js";
import MoodReportCard from "./MoodReportCard.jsx";
import MoodReportForm from "./MoodReportForm.jsx";

const ReportsByDateList = ({date}) => {

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
            {!hasReportedToday && <MoodReportForm />}
            {employeeReports.map((report, index) => (
                <MoodReportCard key={index} report={report}/>
            ))}
        </div>
    );
}

export default ReportsByDateList
