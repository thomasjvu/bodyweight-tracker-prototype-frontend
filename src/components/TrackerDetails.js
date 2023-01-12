// context
import { useTrackersContext } from '../hooks/useTrackersContext';

// buttons
import EditButton from '../components/EditButton'
import DeleteButton from '../components/DeleteButton'

// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import format from 'date-fns/format';

const TrackerDetails = ({ tracker }) => {
    console.log('trackerdetails', tracker)
    const { dispatch } = useTrackersContext();

    // Delete Button
    const handleDelete = async () => {
        const response = await fetch(
            process.env.REACT_APP_TRACKER_API_URL + tracker._id,
            {
                method: 'DELETE',
            }
        );
        const json = await response.json();

        if (response.ok) {
            dispatch({ type: 'DELETE_TRACKER', payload: json });
        }
    };

    // Update Button
    const handleUpdate = async () => {
        const response = await fetch(
            process.env.REACT_APP_TRACKER_API_URL + tracker._id,
            {
                method: 'PATCH',
            }
        );
        console.log('response', response)
        const json = await response.json();
        console.log('json', json)

        if (response.ok) {
            dispatch({ type: 'UPDATE_TRACKER', payload: json });
        }
    };

    // const date = {tracker.date}
    console.log('tracker', tracker)
    console.log('tracker date', tracker.date)

    // Date format
    function formatTheDate(date) {
        const [year, month, day] = date.substr(0, 10).split('-');
        return format(new Date(year, month - 1, day), 'MMMM Do, yyyy');
    }

    // console.log('tracker', tracker)
    return (
        <div className="tracker-details">
            <p className="tracker-weight">
                <strong>Weight (lbs):</strong> {tracker.weight}
            </p>
            <p className="tracker-date">
                <strong>Date:</strong>{' '}
                {formatTheDate(tracker.date)}
            </p>
            <p className="tracker-updated">
                <strong>Updated: </strong>{' '}
                {formatDistanceToNow(new Date(tracker.createdAt), {
                    addSuffix: true,
                })}
            </p>
            <br />
            <p className="tracker-id">
                <strong>ID:</strong> {tracker._id}
            </p>
            <section className="tracker-modify">
                <EditButton />
                <DeleteButton tracker={tracker._id}/>
                <span
                    className="material-symbols-outlined edit"
                    onClick={handleUpdate}
                >
                    edit
                </span>
                <span
                    className="material-symbols-outlined delete"
                    onClick={handleDelete}
                >
                    delete
                </span>
            </section>
        </div>
    );
};

export default TrackerDetails;
