import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';
import { 
    Chart as ChartJS, 
    LineElement, 
    PointElement,  
    CategoryScale, 
    LinearScale, 
    Title, 
    Tooltip, 
    Legend 
} from 'chart.js';
  
ChartJS.register(
    LineElement, 
    PointElement,  
    CategoryScale, 
    LinearScale, 
    Title, 
    Tooltip, 
    Legend
);

const LineGraph = () => {
    const [data, setData] = useState(null);  
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://disease.sh/v3/covid-19/historical/all?lastdays=all');
                const { cases } = response.data.cases;

                const labels = Object.keys(response.data.cases);
                const dataValues = Object.values(response.data.cases);

                setData({
                    labels,
                    datasets: [
                        {
                            label: 'COVID-19 Cases',
                            data: dataValues,
                            borderColor: 'rgba(75, 192, 192, 1)',
                            backgroundColor: 'rgba(75, 192, 192, 0.2)',
                            fill: true,
                        },
                    ],
                });

                setLoading(false);  
            } catch (error) {
                console.log(error);
                setError('Error fetching data');
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <p className="text-center">Loading...</p>; 
    if (error) return <p className="text-center text-red-600">{error}</p>;   

    return (
        <div className="w-full p-4">
            <div className="bg-white p-4 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">COVID-19 Cases Over Time</h2>
                <div className="relative">
                    <Line data={data} options={{
                        responsive: true,
                        maintainAspectRatio: false,
                        scales: {
                            x: {
                                grid: {
                                    display: false,
                                },
                            },
                            y: {
                                grid: {
                                    display: false,
                                },
                            },
                        },
                    }} />
                </div>
            </div>
        </div>
    );
};

export default LineGraph;
