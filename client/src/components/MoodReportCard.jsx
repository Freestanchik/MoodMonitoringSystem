const MoodReportCard = ({report}) => {
    console.log(report);
    const {additionalInfo, isConflict, isCrunch, isSick, rate, reportDate, owner} = report;

    // Determine the color of the rate circle based on the rate value
    let rateColor;
    if (rate >= 8) {
        rateColor = 'bg-green-500';
    } else if (rate >= 5) {
        rateColor = 'bg-yellow-500';
    } else {
        rateColor = 'bg-red-500';
    }

    return (
        <div
            className="flex items-center w-full rounded overflow-hidden shadow-lg bg-white my-4 p-6 border-l-4 border-blue-500">
            {owner.login ? <div className="flex flex-col mr-4">
                <img
                    src={`https://i.pravatar.cc/150?u=${owner._id}`}
                    alt="User Avatar"
                    className="w-16 h-16 rounded-full object-cover self-center"
                />
                <h2 className="text-lg font-bold text-gray-800 mb-2">{owner.login}</h2>
            </div> : <></>

            }

            <div className="flex-1">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-bold text-blue-600">Date: {new Date(reportDate).toLocaleDateString()}</h2>
                </div>
                <p className="text-gray-700 mb-4">{additionalInfo}</p>
                <div className="flex flex-wrap text-xl">
                    <p className="mr-2">Complaints: </p>
                    {isConflict && (
                        <span className="bg-red-100 text-red-800 text-xl font-semibold mr-2 px-2.5 py-0.5 rounded">
                            Conflict
                        </span>
                    )}
                    {isCrunch && (
                        <span
                            className="bg-yellow-100 text-yellow-800 text-xl font-semibold mr-2 px-2.5 py-0.5 rounded">
                            Crunch
                        </span>
                    )}
                    {isSick && (
                        <span className="bg-green-100 text-green-800 text-xl font-semibold mr-2 px-2.5 py-0.5 rounded">
                            Sick
                        </span>
                    )}
                </div>
            </div>
            <div
                className={`w-16 h-16 rounded-full flex items-center justify-center text-white text-xl font-bold ${rateColor}`}>
                {rate}
            </div>
        </div>
    );
};

export default MoodReportCard;