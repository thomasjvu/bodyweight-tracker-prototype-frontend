import { useNavigate } from 'react-router-dom'
import { useTrackersContext } from '../hooks/useTrackersContext';

const EditButton = (tracker) => {

    const { dispatch } = useTrackersContext();

    // React Router Navigation
    let navigate = useNavigate()

    // Edit Navigation
    const handleEditNav = () => {
       navigate('UpdateTracker')
    }

    // console.log('id', id)
    // console.log('weight', weight)
    console.log('date of tracker', tracker.date)
    console.log('tracker object', tracker)

    return (
            <span className="material-symbols-outlined edit" onClick={handleEditNav}>
                edit
            </span>
    );
};

export default EditButton;
