// import context
import { useTrackersContext } from '../hooks/useTrackersContext';

// Delete Button
const DeleteButton = ({ tracker }) => {
    // Get Tracker Details
    console.log('deleteTrackerDetails', tracker._id)
    const { dispatch } = useTrackersContext();

    // Handle Deletion
    const handleDelete = async () => {
        const response = await fetch(process.env.REACT_APP_TRACKER_API_URL + tracker._id, {
            method: 'DELETE',
        });
        const json = await response.json();

        if (response.ok) {
            dispatch({ type: 'DELETE_TRACKER', payload: json });
        }
    };

    // DOM Output
    return (
        <span className="material-symbols-outlined delete" onClick={handleDelete}>
            delete
        </span>
    );
};

export default DeleteButton;
