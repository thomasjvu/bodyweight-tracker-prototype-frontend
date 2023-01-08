import { TrackersContext } from '../context/TrackersContext'
import { useContext } from 'react'

export const useTrackersContext = () => {
    const context = useContext(TrackersContext)

    if (!context) {
        throw Error('Yikes. useTrackersContext must be used inside a TrackersContextProvider')
    }

    return context
}
