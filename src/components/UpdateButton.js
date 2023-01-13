import { useNavigate } from 'react-router-dom'
import { useTrackersContext } from '../hooks/useTrackersContext';

const UpdateButton = ({tracker}) => {

    console.log('updateButtonDetails', tracker._id)

    // Get Tracker Details
    const { dispatch } = useTrackersContext();

    // React Router Navigation
    let navigate = useNavigate()

    // Edit Navigation
    const handleUpdateNav = () => {
       navigate('UpdateTracker')
    }

    // Handle Update
    const handleUpdate = async () => {
        const response = await fetch(
            process.env.REACT_APP_TRACKER_API_URL + tracker._id,
            {
                method: "GET",
            }
        );
        console.log("response", response);
        const json = await response.json();
        console.log("json", json);

        if (response.ok) {
            dispatch({ type: "UPDATE_TRACKER", payload: json });
        }
    };

    return (
            // Isolate Tracker
            <span className="material-symbols-outlined edit" onClick={handleUpdate}>
                edit
            </span>

            // Navigate to new page
            // <span className="material-symbols-outlined edit" onClick={handleUpdateNav} tracker={tracker._id}>
            //     edit
            // </span>
    )
};

export default UpdateButton;
