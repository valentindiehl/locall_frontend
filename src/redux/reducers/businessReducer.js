export default function reducer(state={
    businessData: [],
    current: 0,
    prev: 0,
    isSelected: false,
    fetching: false,
    fetched: false,
    error: null,
}, action) {

    switch(action.type) {
        case "FETCH_BUSINESSES": {
            return {...state, fetching: true}
        }
        case "FETCH_BUSINESSES_REJECTED": {
            return {...state, fetching: false, error: action.payload}
        }
        case "FETCH_BUSINESSES_FULFILLED": {
            return {
                ...state,
                fetching: false,
                fetched: true,
                businessData: action.payload,
            }
        }
        case "SELECT_BUSINESS": {
            return {
                ...state,
                isSelected: true,
                prev: state.current,
                current: action.payload,
            }
        }
        case "DESELECT_BUSINESS": {
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