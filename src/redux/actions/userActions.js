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