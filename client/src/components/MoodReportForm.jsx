import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import {createReport} from "../store/slices/moodReportSlice.js";

const MoodReportForm = () => {
    const dispatch = useDispatch();

    const initialValues = {
        isCrunch: false,
        isSick: false,
        isConflict: false,
        isPersonal: false,
        rate: 1,
        additionalInfo: ""
    };

    const validationSchema = Yup.object({
        isCrunch: Yup.boolean().required('Required'),
        isSick: Yup.boolean().required('Required'),
        isConflict: Yup.boolean().required('Required'),
        isPersonal: Yup.boolean().required('Required'),
        rate: Yup.number().min(1).max(10).required('Required'),
        additionalInfo: Yup.string().required('Required')
    });

    const handleSubmit = (values, { resetForm }) => {
        dispatch(createReport(values));
        console.log(values)
        resetForm();
    };

    return (
        <div className="max-w-lg mx-auto p-4 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-4">New Report</h2>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                <Form className="space-y-4">

                    <div>
                        <label htmlFor="rate" className="block font-medium text-gray-700">Rate</label>
                        <Field
                            type="number"
                            name="rate"
                            min="1"
                            max="10"
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                        <ErrorMessage name="rate" component="div" className="text-red-500 text-sm"/>
                    </div>
                    <div className="flex items-center">
                        <Field
                            type="checkbox"
                            name="isCrunch"
                            className="mr-2"
                        />
                        <label htmlFor="isCrunch" className="font-medium text-gray-700">Crunch</label>
                    </div>
                    <ErrorMessage name="isCrunch" component="div" className="text-red-500 text-sm"/>

                    <div className="flex items-center">
                        <Field
                            type="checkbox"
                            name="isSick"
                            className="mr-2"
                        />
                        <label htmlFor="isSick" className="font-medium text-gray-700">Sick</label>
                    </div>
                    <ErrorMessage name="isSick" component="div" className="text-red-500 text-sm"/>

                    <div className="flex items-center">
                        <Field
                            type="checkbox"
                            name="isConflict"
                            className="mr-2"
                        />
                        <label htmlFor="isConflict" className="font-medium text-gray-700">Conflict</label>
                    </div>
                    <ErrorMessage name="isConflict" component="div" className="text-red-500 text-sm"/>

                    <div className="flex items-center">
                        <Field
                            type="checkbox"
                            name="isPersonal"
                            className="mr-2"
                        />
                        <label htmlFor="isPersonal" className="font-medium text-gray-700">Personal</label>
                    </div>
                    <ErrorMessage name="isPersonal" component="div" className="text-red-500 text-sm"/>

                    <div>
                        <label htmlFor="additionalInfo" className="block font-medium text-gray-700">Additional
                            Info</label>
                        <Field
                            as="textarea"
                            name="additionalInfo"
                            rows="4"
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                        <ErrorMessage name="additionalInfo" component="div" className="text-red-500 text-sm"/>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                            Submit
                        </button>
                    </div>
                </Form>
            </Formik>
        </div>
    );
};

export default MoodReportForm;