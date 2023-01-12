import { useState } from "react"
import { useTrackersContext } from '../hooks/useTrackersContext' 

const UpdateTrackerForm = ( {tracker} ) => {


    const { dispatch } = useTrackersContext()

    const [id, setId] = useState('')
    const [weight, setWeight] = useState('')
    const [date, setDate] = useState('')
    const [error, setError] = useState(null)
    // const [emptyFields, setEmptyFields] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault()

        const tracker = {id}

        const response = await fetch(process.env.REACT_APP_TRACKER_API_URL + tracker._id, {
            method: 'PATCH',
            body: JSON.stringify(tracker),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
            // setEmptyFields(json.emptyFields)
        }
        if (response.ok) {
            setWeight('')
            setDate('')
            setError(null)
            // setEmptyFields([])
            // console.log('existing bodyweight updated', json)
            dispatch({type: 'UPDATE_TRACKER', payload: json})
        }
    }

    return (
        <form className="update" onSubmit={handleSubmit}>
            <h3>Update Bodyweight</h3>

            <label>ID:</label>
            <input 
                type="text"
                onChange={(e) => setId(e.target.value)}
                value={id}
                // className={emptyFields.includes('._id') ? 'error' : ''}
            />

            <label>Weight:</label>
            <input 
                type="number"
                onChange={(e) => setWeight(e.target.value)}
                value={weight}
                // className={emptyFields.includes('weight') ? 'error' : ''}
            />

            <label>Date:</label>
            <input 
                type="date"
                onChange={(e) => setDate(e.target.value)}
                value={date}
                // className={emptyFields.includes('date') ? 'error' : ''}
            />

            <button>Update Bodyweight</button>
            {error && <div className="error">{error}</div>}
        </form>

    )
}

export default UpdateTrackerForm
