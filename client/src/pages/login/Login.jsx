import React, {useEffect} from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import {useSelector, useDispatch} from "react-redux";
import {login, reset} from "../../store/slices/authSlice.js";
import {Link, useNavigate} from "react-router-dom";


const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {token, isAdmin, isLoading, isError, isSuccess, message} = useSelector((state) => state.auth)

    useEffect(() => {


        if (isSuccess || token) {
            if (isAdmin === true) {
                navigate("/admin")
            } else {
                navigate("/employee")
            }
        }

        dispatch(reset())

    }, [token, isSuccess, isError, message, navigate, dispatch])

    const initialValues = {
        email: '',
        password: ''
    };

    const handleSubmit = (values) => {
        dispatch(login(values))
    };

    const validateForm = values => {
        const errors = {};

        if (!values.email) {
            errors.email = 'Email is required';
        }

        if (!values.password) {
            errors.password = 'Password is required';
        } else if (values.password.length < 6) {
            errors.password = 'Password must be at least 6 characters long';
        }

        return errors;
    };

    return (
        <Formik
            initialValues={initialValues}
            validate={validateForm}
            onSubmit={handleSubmit}
        >
            <Form className="w-full max-w-sm mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <h2 className="text-2xl mb-6 text-center font-bold">Вхід</h2>

                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Електронна
                        пошта</label>
                    <Field
                        type="email"
                        id="email"
                        name="email"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    <ErrorMessage name="email" component="div" className="text-red-500 text-xs mt-1"/>
                </div>

                <div className="mb-6">
                    <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Пароль</label>
                    <Field
                        type="password"
                        id="password"
                        name="password"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    <ErrorMessage name="password" component="div" className="text-red-500 text-xs mt-1"/>
                </div>
                <button type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mx-auto">
                    Увійти
                </button>
            </Form>
        </Formik>
    );
};

export default Login;