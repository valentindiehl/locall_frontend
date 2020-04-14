import axios from 'axios';

export function fetchAuth() {
    return function(dispatch) {
        dispatch({type: "FETCH_AUTHENTICATION"});
        axios.get(process.env.REACT_APP_API_URL + '/v1/auth/', {
            withCredentials: true
        })
            .then((res) => {
                dispatch({type: "FETCH_AUTHENTICATION_FULFILLED"})
            })
            .catch((err) => {
                dispatch({type: "FETCH_AUTHENTICATION_REJECTED"})
            })
    }
}

export function fetchProfile() {
    return function(dispatch) {
        dispatch({type: "FETCH_PROFILE"});
        axios.get(process.env.REACT_APP_API_URL + '/v1/account/', {
            withCredentials: true
        })
            .then((res) => {
                dispatch({type: "FETCH_PROFILE_FULFILLED", payload: res.data})
            })
            .catch((err) => {
                dispatch({type: "FETCH_PROFILE_REJECTED"})
            })
    }
}