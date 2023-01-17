import { useState } from "react"
import { useTrackersContext } from '../hooks/useTrackersContext' 

const TrackerForm = () => {

    const { dispatch } = useTrackersContext()

    const [weight, setWeight] = useState('')
    const [date, setDate] = useState('')
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault()

        const tracker = {weight, date}

        const response = await fetch(process.env.REACT_APP_TRACKER_API_URL, {
            method: 'POST',
            body: JSON.stringify(tracker),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
            setEmptyFields(json.emptyFields)
        }
        if (response.ok) {
            setWeight('')
            setDate('')
            setError(null)
            setEmptyFields([])
            // console.log('new bodyweight added', json)
            dispatch({type: 'CREATE_TRACKER', payload: json})
        }
    }

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>New Bodyweight</h3>

            <label>Weight:</label>
            <input 
                type="number"
                onChange={(e) => setWeight(e.target.value)}
                value={weight}
                className={emptyFields.includes('weight') ? 'error' : ''}
            />

            <label>Date:</label>
            <input 
                type="date"
                onChange={(e) => setDate(e.target.value)}
                className={emptyFields.includes('date') ? 'error' : ''}
            />

            <button>Add Bodyweight</button>
            {error && <div className="error">{error}</div>}
        </form>

    )
}

export default TrackerForm
