import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getUser} from "../../store/slices/userSlice.js";
import {getAllReports} from "../../store/slices/moodReportSlice.js";
import LineChart from "../../components/LineChart.jsx";
import ReportGrid from "../../components/ReportGrid.jsx";
import RecommendationsList from "../../components/RecomendationsList.jsx";

const AdminPage = () => {
    const {token} = useSelector((state) => state.auth)
    const dispatch = useDispatch()

    const {moodReports, predictions, isSuccess} = useSelector((state) => state.report)

    const [chartData, setChartData] = useState({
        labels: [],
        datasets: [
            {
                label: 'Loading data...',
                data: [],
                fill: false,
                backgroundColor: 'rgb(75, 192, 192)',
                borderColor: 'rgba(75, 192, 192, 0.2)',
            },
        ],
    });

    const [chartOptions, setChartOptions] = useState({
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Dynamics of the average value of team mood',
                font: {
                    size: 24, // Adjust the font size here
                    weight: 'bold', // Optional: you can also adjust the font weight
                },
            },
        },
        scales: {
            x: {
                ticks: {
                    font: {
                        size: 14, // Adjust the font size here
                    },
                },
            },
            y: {
                ticks: {
                    font: {
                        size: 14, // Adjust the font size here
                    },
                },
            },
        },
    });

    useEffect(() => {

        dispatch(getUser())
        dispatch(getAllReports())

        const labels = moodReports.map(item => item.reportDate);
        const values = moodReports.map(item => item.rate);

        setChartData({
            labels: labels,
            datasets: [
                {
                    label: 'Mood Rate value',
                    data: values,
                    fill: false,
                    backgroundColor: 'rgb(75, 192, 192)',
                    borderColor: 'rgba(75, 192, 192, 0.2)',
                },
            ],
        });
    }, [token, dispatch])

    return (
        <div className="max-w-7xl w-full bg-white p-8 shadow-md">
            <div className="">
                <LineChart data={chartData} options={chartOptions}></LineChart>
                <h2 className="mt-4 text-red-600 text-2xl">Actions Required</h2>
                <RecommendationsList></RecommendationsList>
                <h2 className="mt-4 text-2xl">MoodReports grid info</h2>
                <ReportGrid reports={moodReports} predictions={predictions}></ReportGrid>

            </div>
        </div>
    );
};

export default AdminPage