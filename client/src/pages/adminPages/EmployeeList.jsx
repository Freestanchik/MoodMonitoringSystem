import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getAllUsers} from "../../store/slices/userSlice.js";
import UserCard from "../../components/userCard.jsx";

const EmployeeList = () => {
    const {allUsers} = useSelector((state) => state.user)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllUsers())
        console.log(allUsers)
    }, [dispatch]);

    return (
        <div className="max-w-7xl mx-auto p-4">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Your Team Members</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {allUsers
                    .filter(user => user.role !== "admin") // Filter out users with role "admin"
                    .map(user => (
                        <UserCard key={user._id} user={user}/>
                    ))
                }
            </div>
        </div>
    )
}

export default EmployeeList