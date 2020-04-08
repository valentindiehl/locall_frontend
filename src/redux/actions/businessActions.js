import axios from 'axios';

export function fetchBusinesses() {
    return function(dispatch) {
        axios.get(process.env.REACT_APP_API_URL + '/v1/businesses/', {
            withCredentials: true
        })
            .then((res) => {
                dispatch({type: "FETCH_BUSINESSES_FULFILLED", payload: res.data})
            })
            .catch((err) => {
                dispatch({type: "FETCH_BUSINESSES_REJECTED", payload: err})
            })
    }
}

export function selectBusiness(index) {
    return {
        type: "SELECT_BUSINESS",
        payload: index
    }
}

export function deselectBusiness() {
    return {
        type: "DESELECT_BUSINESS"
    }
}