import React from 'react';
import {NavLink} from "react-router-dom";

const UserCard = ({user}) => {
    return (
        <NavLink
            to={`/user/${user._id}`}
            className="hover:bg-gray-100 block max-w-md mx-auto mb-4 focus:outline-none"
        >
            <div
                className="bg-white shadow-md rounded-lg flex p-4 items-center transform transition duration-300 hover:shadow-lg hover:scale-105">
                <img
                    src={`https://i.pravatar.cc/150?u=${user._id}`}
                    alt="User Avatar"
                    className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                    <h2 className="text-lg font-bold">{user.login}</h2>
                    <p className="text-gray-600">pos: {user.position}</p>
                    <p className="text-gray-600">exp: {user.experience} years</p>
                    <p className="text-gray-600">Email: {user.email}</p>
                    <p className="text-gray-600">Role: {user.role}</p>

                </div>
            </div>
        </NavLink>
    );
};

export default UserCard;