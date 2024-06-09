import React from 'react';
import {useSelector} from 'react-redux';

const recommendations = {
    1: <></>,
    2: <>
        <div className="p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Low team morale is noticed, the following actions should be taken
            </h2>
            <ol className="list-decimal list-inside space-y-3 text-gray-700">
                <li>
                    Plan regular social events like
                    team lunches, game nights, or virtual coffee breaks.
                </li>
                <li>
                    Organize offsite retreats for a change of
                    environment and informal interaction.
                </li>
                <li>
                    Recognize and reward outstanding
                    contributions with awards, certificates, or small bonuses.
                </li>
                <li>
                    Create a “Wall of Fame” to highlight
                    achievements and contributions.
                </li>
                <li>
                    Provide access to resources like
                    counseling services or stress management workshops.
                </li>
            </ol>
        </div>
    </>,
    3: "Recommendation: Keep up the good work, but be mindful of stress.",
    4: <>
        <div className="p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                There's an unhealthy atmosphere in your team. Conflicts will lead to a deterioration in overall team
                performance. To resolve the problem, follow the guidelines:
            </h2>
            <ol className="list-decimal list-inside space-y-3 text-gray-700">
                <li>Schedule a private meeting with
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
    5: <>
        <div className="p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Your team is burning out. It fails to deliver on time, you need to do the following:
            </h2>
            <ol className="list-decimal list-inside space-y-3 text-gray-700">
                <li>
                    <span className="font-semibold">Immediate Prioritization:</span> Identify critical tasks that must
                    be completed first and delegate non-essential tasks to a later time.
                </li>
                <li>
                    <span className="font-semibold">Scope Adjustment:</span> Review the project scope and eliminate or
                    defer low-priority features or tasks.
                </li>
                <li>
                    <span className="font-semibold">Realistic Deadlines:</span> Communicate with stakeholders to
                    renegotiate deadlines where possible. Explain the impact of current workload on quality and team
                    health.
                </li>
                <li>
                    <span className="font-semibold">Mandatory Breaks:</span> Ensure team members take regular breaks
                    during work hours to prevent burnout.
                </li>
                <li>
                    <span className="font-semibold">Time Off: </span> Offer comp time or additional paid leave once the
                    crunch period ends to allow team members to recover.
                </li>
                <li>
                    <span className="font-semibold">Task Delegation: </span> Use project management tools to track
                    workload and progress, making it easier to identify when a crunch may occur.
                </li>
            </ol>
        </div>
    </>,
};

const RecommendationsList = () => {
    const {moodReports, predictions} = useSelector((state) => state.report)


    return (
        <div className="space-y-4">
            {moodReports.map((report, index) => {
                if (predictions.predictions[index] === 1) {
                    return null;
                }
                const date = new Date(report.reportDate);
                const formattedDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;

                return (
                    <div key={index} className="bg-white p-4 rounded-lg shadow-md border-b-red-600 border-2">
                        <h3 className="text-lg font-semibold mb-2">Report Date: {formattedDate}</h3>
                        <p className="mt-2">{recommendations[predictions.predictions[index]]}</p>
                    </div>
                )
            })}
        </div>
    );
};

export default RecommendationsList;