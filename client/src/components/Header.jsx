import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getUser, resetUser} from "../store/slices/userSlice.js";
import {logout, reset} from "../store/slices/authSlice.js";
import Navigation from "./Navigation.jsx";

const Header = () => {
    const {token, isAdmin} = useSelector((state) => state.auth)
    const {user} = useSelector((state) => state.user)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const userName = 'John Doe';

    useEffect(() => {
        dispatch(getUser())
    }, [token])

    const onLogout = () => {
        dispatch(logout())
        dispatch(reset())
        dispatch(resetUser())
        navigate('/login')
    }

    return (
        <header className="bg-blue-600 text-white py-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex content-center">
                    <div className="text-2xl font-bold">
                        Mood Monitoring System
                    </div>
                    { isAdmin===true
                        ? <Navigation></Navigation>
                        :<></>
                    }
                </div>
                <div className="flex items-center space-x-4">
                    {token
                        ? <>
                            <span>{user ? user.login : <></>}</span>
                            <button
                                onClick={onLogout}
                                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                            >
                                Logout
                            </button>
                        </>
                        : <></>
                    }

                </div>
            </div>
        </header>
    );
};

export default Header;