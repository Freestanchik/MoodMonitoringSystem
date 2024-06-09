import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {useParams} from "react-router-dom";
import MoodReportCard from "../../components/MoodReportCard.jsx";
import {getReportByOwnerId} from "../../store/slices/moodReportSlice.js";

const ReportsByUser = () => {
    const { userId } = useParams();

    const dispatch = useDispatch()

    const {employeeReports, isSuccess} = useSelector((state) => state.report)

    useEffect(() => {
        dispatch(getReportByOwnerId({ownerId: userId}))
        console.log(employeeReports)
    }, []);

    return (
        <div className="w-full max-w-5xl mx-auto">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">User Reports</h1>
            {employeeReports.map((report, index) => (
                <MoodReportCard key={index} report={report}/>
            ))}
        </div>
    );
}

export default ReportsByUser
