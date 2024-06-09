import React from 'react';

const ReportGrid = ({reports, predictions}) => {
    const rows = ['isCrunch', 'isSick', 'isConflict', 'isPersonal', 'rate', 'predictions'];

    return (
        <div className="mt-4">
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                    <tr>
                        <th className="py-2 px-4 border-b border-gray-200">Property</th>
                        {reports.map((report, index) => (
                            <th key={index} className="py-2 px-4 border-b border-gray-200">{report.reportDate}</th>
                        ))}
                    </tr>
                    </thead>
                    <tbody>
                    {rows.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            <td className="py-2 px-4 border-b border-gray-200 font-semibold">{row}</td>
                            {row === 'predictions' ?
                                predictions.predictions.map((value, colIndex) => (
                                    <td key={colIndex}
                                        className="py-2 px-4 border-b border-gray-200 text-center">{value}</td>
                                )) :
                                reports.map((report, colIndex) => (
                                    <td key={colIndex}
                                        className="py-2 px-4 border-b border-gray-200 text-center">{report[row]}</td>
                                ))
                            }
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ReportGrid;