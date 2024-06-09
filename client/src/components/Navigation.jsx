import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getUser} from "../store/slices/userSlice.js";

const Navigation = () => {
    const {token} = useSelector((state) => state.auth)
    const {user} = useSelector((state) => state.user)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUser())
    }, [token])

    return (
        <ul className="ml-4 flex gap-6 text-white">
            <li>
                <NavLink
                    to="/admin"
                    className="text-amber-100 text-xl hover:text-gray-300  px-3 rounded-md font-medium"
                    activeClassName="text-gray-300"
                >
                    Statistics
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/team"
                    className="text-amber-100 text-xl hover:text-gray-300 px-3  rounded-md font-medium"
                    activeClassName="text-gray-300"
                >
                    Your Team
                </NavLink>
            </li>
        </ul>
    )
}

export default Navigation