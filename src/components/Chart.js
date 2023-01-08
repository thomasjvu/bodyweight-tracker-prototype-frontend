import { useRef, useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';

const Chart = () => {
    const [data, setData] = useState([]);

    // get data
    useEffect(() => {
        fetch('http://localhost:3005/api/trackers')
            .then((response) => response.json())
            .then((data) => {
                setData(data);
            });
    }, []);

    console.log(data)


    const myLineChart = () => {
        return (
            <div>
                <Line
                    data={{
                        labels: data.map((tracker) => tracker.weight),
                        datasets: [
                            {
                                label: 'My Line Chart',
                                fill: false,
                                lineTension: 0.1,
                                backgroundColor: 'rgba(75,192,192,0.4)',
                                borderColor: 'rgba(75,192,192,1)',
                                borderCapStyle: 'butt',
                                borderDash: [],
                                borderDashOffset: 0.0,
                                borderJoinStyle: 'miter',
                                pointBorderColor: 'rgba(75,192,192,1)',
                                pointBackgroundColor: '#fff',
                                pointBorderWidth: 1,
                                pointHoverRadius: 5,
                                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                                pointHoverBorderColor: 'rgba(220,220,220,1)',
                                pointHoverBorderWidth: 2,
                                pointRadius: 1,
                                pointHitRadius: 10,
                                data: data.map((tracker) => tracker.weight),
                            },
                        ],
                    }}
                />
            </div>
        );
    };
};

export default Chart;
