import { useState, useEffect } from 'react';
import { useTrackersContext } from '../hooks/useTrackersContext';
import format from 'date-fns/format';

function TrackersTable() {
    const [data, setData] = useState([]);
    const { trackers } = useTrackersContext();

    // Date format
    function formatTheDate(date) {
        const [year, month, day] = date.substr(0, 10).split("-");
        return format(new Date(year, month - 1, day), "MMMM dd, yyyy");
    }

    useEffect(() => {
        //Make an HTTP request to the server to get data
        fetch(process.env.REACT_APP_TRACKER_API_URL)
            .then((response) => response.json())
            .then((data) => {
                setData(data);
            });
    }, [trackers]);

    return (
        <div>
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
                            <td>
                                {formatTheDate((tracker.date))}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default TrackersTable;
