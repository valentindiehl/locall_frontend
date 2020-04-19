import axios from 'axios';

export function fetchEvents() {
    return function(dispatch) {
        axios.get(process.env.REACT_APP_API_URL + '/v1/events/', {
            withCredentials: true
        })
            .then((res) => {
                dispatch({type: "FETCH_EVENTS_FULFILLED", payload: res.data})
            })
            .catch((err) => {
                dispatch({type: "FETCH_EVENTS_REJECTED", payload: err})
            })
    }
}

export function selectEvent(index) {
    return {
        type: "SELECT_EVENT",
        payload: index
    }
}

export function deselectEvent() {
    return {
        type: "DESELECT_EVENT"
    }
}