import { useRef, useEffect, useState } from 'react';
import { Chart } from 'chart.js';
// import { Line } from 'react-chartjs-2'

function TrackersChart() {
    const chartRef = useRef(null);
    const [data, setData] = useState([]);
    let lineChart = null

    // get data
    useEffect(() => {
        fetch('http://localhost:3005/api/trackers')
            .then((response) => response.json())
            .then((data) => {
                setData(data);
            });
    }, []);

    //get chart data
    function getChartData(data) {
        const chartData = {
            labels: [],
            datasets: [
                {
                    label: 'Line 1',
                    data: [],
                    borderColor: '#ff0000',
                    fill: true,
                },
            ],
        };

        data.forEach((tracker) => {
            chartData.labels.push(tracker.name);
            chartData.datasets[0].data.push(parseFloat(tracker.weight));
        });
    }

    // create chart
    useEffect(() => {
        if (data.length > 0) {
            const myChartRef = chartRef.current.getContext('2d');

            if (lineChart) {
                lineChart.destroy()
            }

            lineChart = new Chart(myChartRef, {
                type: 'line',
                data: getChartData(data),
                options: {
                    scales: {
                        yAxes: [
                            {
                                ticks: {
                                    beginAtZero: true,
                                },
                            },
                        ],
                    },
                },
            });
        }
    }, [data]);


    return (
        <div>
            <canvas ref={chartRef} />
        </div>
    );
}

export default TrackersChart;
