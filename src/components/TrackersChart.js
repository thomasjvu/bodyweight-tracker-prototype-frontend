import { useState, useEffect } from 'react';
import { useTrackersContext } from '../hooks/useTrackersContext' 
import format from 'date-fns/format'

function TrackersChart() {
    const [data, setData] = useState([]);
    const {trackers} = useTrackersContext()

    useEffect(() => {
        //Make an HTTP request to the server to get data
        fetch(process.env.REACT_APP_TRACKER_API_URL)
            .then(response => response.json())
            .then(data => {
                setData(data)
            })


    }, [trackers])
            
    return (
        <table className="trackers-table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Weight</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
                {data.map((tracker) => (
                    <tr key={tracker._id}>
                        <td className="table-tracker-id">{tracker._id}</td>
                        <td>{tracker.weight}</td>
                        <td>{format(new Date(tracker.date), 'MM/dd/yyyy')}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default TrackersChart;
