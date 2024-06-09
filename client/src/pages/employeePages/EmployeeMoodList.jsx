import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getUser} from "../../store/slices/userSlice.js";
import {getAllReports, getReportByOwnerId} from "../../store/slices/moodReportSlice.js";
import MoodReportList from "../../components/MoodReportList.jsx";
import MoodReportForm from "../../components/MoodReportForm.jsx";


const EmployeeMoodList = () => {
    const {token} = useSelector((state) => state.auth)
    const {user, isSuccess} = useSelector((state) => state.user)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUser())
    }, [isSuccess]);
    return (
        <>
            {user
                ?
                <div className="w-full max-w-4xl">
                    <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Your Reports</h1>
                    <MoodReportList user={user}></MoodReportList>
                </div>
                : <></>
            }
        </>
    );
};

export default EmployeeMoodList;