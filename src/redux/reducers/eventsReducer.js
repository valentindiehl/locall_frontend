export default function reducer(state={
    eventsData: [],
    current: 0,
    prev: 0,
    isSelected: false,
    fetching: false,
    fetched: false,
    error: null,
}, action) {

    switch(action.type) {
        case "FETCH_EVENTS": {
            return {...state, fetching: true}
        }
        case "FETCH_EVENTS_REJECTED": {
            return {...state, fetching: false, error: action.payload}
        }
        case "FETCH_EVENTS_FULFILLED": {
            return {
                ...state,
                fetching: false,
                fetched: true,
                eventsData: action.payload,
            }
        }
        case "SELECT_EVENT": {
            return {
                ...state,
                isSelected: true,
                prev: state.current,
                current: action.payload,
            }
        }
        case "DESELECT_EVENT": {
            return {
                ...state,
                isSelected: false,
                current: null,
            }
        }
        default: {
            return state
        }
    }
}