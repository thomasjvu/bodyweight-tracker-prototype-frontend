import TrackerDetails from '../components/TrackerDetails'
import UpdateTrackerForm from '../components/UpdateTrackerForm'

const UpdateTracker = (trackerCard) => {
    return (
        <>
            <h1>Update Bodyweight Tracker</h1>
            <UpdateTrackerForm />
            {/* <TrackerDetails tracker={trackerCard}/> */}
        </>
    )
}

export default UpdateTracker
