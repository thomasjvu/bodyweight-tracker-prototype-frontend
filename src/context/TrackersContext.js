import { createContext, useReducer } from 'react'

export const TrackersContext = createContext()

// keep local state in touch with database
export const trackersReducer = (state, action) => {
    switch(action.type) {
        case 'SET_TRACKERS':
            return {
                trackers: action.payload
            }
        case 'CREATE_TRACKER':
            return {
                trackers: [action.payload, ...state.trackers]
            }
        case 'DELETE_TRACKER':
            return {
                trackers: state.trackers.filter((tracker) => tracker._id !== action.payload._id )
            }
        case 'UPDATE_TRACKER':
            return {
                trackers: state.trackers.filter((tracker) => tracker._id === action.payload._id )
            }
        default:
            return state
    }
}

export const TrackersContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(trackersReducer, {
        trackers: null
    })

    return (
        <TrackersContext.Provider value={{...state, dispatch}}>
            { children }
        </TrackersContext.Provider>
    )
}
