import { useTrackersContext } from '../hooks/useTrackersContext'

// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import format from 'date-fns/format'

const TrackerDetails = ({tracker}) => {

    const { dispatch } = useTrackersContext()

    // Delete Button
    const handleClick = async () => {
        const response = await fetch(process.env.REACT_APP_TRACKER_API_URL + tracker._id, {
            method: 'DELETE'
        })
        const json = await response.json()

        if (response.ok) {
            dispatch({type: 'DELETE_TRACKER', payload: json})
        }
    }

    // Update Button
    // const handleUpdate = async () => {
    //     const response = await fetch(process.env.REACT_APP_TRACKER_API_URL + tracker._id, {
    //         method: 'PATCH'
    //     })
    //     const json = await response.json()

    //     if (response.ok) {
    //         dispatch({type: 'UPDATE_TRACKER', payload: json})
    //     }
    // }

    return (
        <div className="tracker-details">
            <p className="tracker-weight"><strong>Weight (lbs):</strong> {tracker.weight}</p>
            <p className="tracker-date"><strong>Date:</strong> {format(new Date(tracker.date), 'MM/dd/yyyy')}</p>
            <p className="tracker-updated"><strong>Updated: </strong> {formatDistanceToNow(new Date(tracker.createdAt), {addSuffix: true})}</p>
            <br />
            <p className="tracker-id"><strong>ID:</strong> {tracker._id}</p>
            <section className="tracker-modify">
                <span className="material-symbols-outlined edit" onClick={handleUpdate}>edit</span>
                <span className="material-symbols-outlined delete" onClick={handleClick}>delete</span>
            </section>
        </div>
    )
}

export default TrackerDetails
