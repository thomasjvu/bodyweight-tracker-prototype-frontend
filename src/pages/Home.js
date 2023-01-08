import { useEffect } from 'react'
import { useTrackersContext } from '../hooks/useTrackersContext' 

// components
import TrackerDetails from '../components/TrackerDetails'
import TrackerForm from '../components/TrackerForm'
import TrackersTable from '../components/TrackersTable'
// import TrackersChart from '../components/TrackersChart'
import Chart from '../components/Chart'
import Footer from '../components/Footer'

const Home = () => {
    const {trackers, dispatch} = useTrackersContext()

    useEffect(() => {

        const fetchTrackers = async () => {
            const response = await fetch('http://localhost:3005/api/trackers')
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
            <Chart />
            {/* <h2 className="page-title">Bodyweight Tracker</h2> */}
            {/* <TrackersChart /> */}
            <section className="tracker-container">
                <div className="trackers">
                    {trackers && trackers.map((tracker) => (
                        <TrackerDetails key={tracker._id} tracker={tracker} />
                    ))}
                </div>
                <div className="trackers-form">
                    <TrackerForm />
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
