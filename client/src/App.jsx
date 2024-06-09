import React, {useEffect} from 'react';
import {Route, Routes, useNavigate} from "react-router-dom";
import Navigation from "./components/Navigation.jsx";
import Login from "./pages/login/Login.jsx";
import {useSelector} from "react-redux";
import AdminPage from "./pages/adminPages/AdminPage.jsx";
import EmployeeMoodList from "./pages/employeePages/EmployeeMoodList.jsx";
import Header from "./components/Header.jsx";
import EmployeeList from "./pages/adminPages/EmployeeList.jsx";
import ReportsByUser from "./pages/adminPages/ReportsByUser.jsx";


const App = () => {

    const navigate = useNavigate();
    const {token, isAdmin} = useSelector((state) => state.auth);

    useEffect(() => {
        if (!token) {
            navigate("/login");
        }

    }, [token, isAdmin]);

    return (
        <div className="App">
            <Header></Header>
            <main className="flex justify-center">
                <Routes>
                    <Route path={"/"}>df</Route>
                    <Route path={"/employee"} element={<EmployeeMoodList/>}></Route>
                    <Route path={"/admin"} element={<AdminPage/>}></Route>
                    <Route path={"/team"} element={<EmployeeList/>}></Route>
                    <Route path={"/user/:userId"} element={<ReportsByUser/>} />
                    <Route path={"/admin/date"} element={<AdminPage/>}></Route>
                    <Route path={"/login"} element={<Login/>}></Route>
                </Routes>
            </main>
        </div>
    );
};

export default App;