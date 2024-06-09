import React from 'react';
import {useSelector} from 'react-redux';

const recommendations = {
    1: <></>,
    2: "Recommendation for prediction value 2: Consider reviewing your work process.",
    3: "Recommendation for prediction value 3: Keep up the good work, but be mindful of stress.",
    4: <>
        <div className="p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                There's an unhealthy atmosphere in your team. Conflicts will lead to a deterioration in overall team
                performance. To resolve the problem, follow the guidelines:
            </h2>
            <ol className="list-decimal list-inside space-y-3 text-gray-700">
                <li>
                    <span className="font-semibold">Arrange a Private Meeting:</span> Schedule a private meeting with
                    each employee individually to hear their perspectives.
                </li>
                <li>
                    <span className="font-semibold">Listen Actively:</span> Give each person the opportunity to express
                    their feelings and views without interruption. Ensure you listen actively and empathetically.
                </li>
                <li>
                    <span className="font-semibold">Document the Issue:</span> Take notes on the key points each
                    employee raises to understand the root cause of the conflict.
                </li>
                <li>
                    <span className="font-semibold">Identify the Root Cause:</span> Look for the underlying issues
                    contributing to the conflict, such as communication breakdowns, differences in work styles, or
                    misunderstandings.
                </li>
                <li>
                    <span className="font-semibold">Assess the Impact:</span> Determine how the conflict is affecting
                    the team’s morale, productivity, and overall work environment.
                </li>
                <li>
                    <span className="font-semibold">Foster a Positive Work Environment:</span> Promote a culture of open
                    communication, mutual respect, and teamwork within your company.
                </li>
            </ol>
        </div>
    </>,
    5: "Recommendation for prediction value 5: Excellent job, keep pushing your limits!"
};

const RecommendationsList = () => {
    const {moodReports, predictions, isSuccess} = useSelector((state) => state.report)

// Reverse the moodReports list
    const reversedMoodReports = moodReports.slice().reverse();

    return (
        <div className="space-y-4">
            {reversedMoodReports.map((report, index) => {
                if (predictions.predictions[index] === 1) {
                    return null;
                }
                return (
                    <div key={index} className="bg-white p-4 rounded-lg shadow-md border-b-red-600 border-2">
                        <h3 className="text-lg font-semibold mb-2">Report
                            Date: {new Date(report.reportDate).toLocaleDateString()}</h3>
                        <p className="mt-2">{recommendations[predictions.predictions[index]]}</p>
                    </div>
                )
            })}
        </div>
    );
};

export default RecommendationsList;