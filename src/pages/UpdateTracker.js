import TrackerDetails from '../components/TrackerDetails'
import UpdateTrackerForm from '../components/UpdateTrackerForm'

const UpdateTracker = ({tracker}) => {
    return (
        <>
            <h1>Update Bodyweight Tracker</h1>
            <UpdateTrackerForm />
            {/*<TrackerDetails tracker={tracker}/>*/}
        </>
    )
}

export default UpdateTracker
