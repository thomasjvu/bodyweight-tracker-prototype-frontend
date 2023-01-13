import { useEffect } from 'react'
import { useTrackersContext } from '../hooks/useTrackersContext' 

// components
import TrackerDetails from '../components/TrackerDetails'
import TrackerForm from '../components/TrackerForm'
import UpdateTrackerForm from '../components/UpdateTrackerForm'
import EditItem from '../components/EditItem'
import TrackersTable from '../components/TrackersTable'
import TrackersChart from '../components/TrackersChart'
import Footer from '../components/Footer'

const Home = () => {
    const {trackers, dispatch} = useTrackersContext()

    useEffect(() => {

        const fetchTrackers = async () => {
            const response = await fetch(process.env.REACT_APP_TRACKER_API_URL)
            const json = await response.json()

            if (response.ok) {
                dispatch({type: 'SET_TRACKERS', payload: json})
            }
        }

        fetchTrackers()
    }, [dispatch])

    return (
        <div className="home">
            <h2>Home</h2>
            {/* <h2 className="page-title">Bodyweight Tracker</h2> */}
             <TrackersChart height={'600px'} width={'100%'} chartId={'63ba8344-9f2b-45b1-8f85-426771d50f8b'} /> 
            <section className="tracker-container">
                <div className="trackers">
                    {trackers && trackers.map((tracker) => {
                        console.log('hometracker', tracker) 
                        return (
                            <TrackerDetails key={tracker._id} tracker={tracker} />
                        )
                    })
                    }
                </div>
                <div className="trackers-forms">
                    <TrackerForm />
                    <div className="divider"></div>
                    <UpdateTrackerForm />
                </div>
            </section>
            <section className="tracker-table">
                <h3 className="table-title">Table</h3>
                <TrackersTable />
            </section>
            <Footer />
        </div>
    );
};

export default Home
