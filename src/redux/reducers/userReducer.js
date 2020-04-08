export default function reducer(state={
    userData: {},
    isLoggedIn: false,
    authFetching: false,
    authFetched: false,
    authError: null,
    userFetching: false,
    userFetched: false,
    userError: null,
}, action) {

    switch(action.type) {
        case "FETCH_AUTHENTICATION": {
            return {...state, authFetching: true}
        }
        case "FETCH_AUTHENTICATION_REJECTED": {
            return {
                ...state,
                authFetching: false,
                authFetched: true,
                isLoggedIn: false}
        }
        case "FETCH_AUTHENTICATION_FULFILLED": {
            return {
                ...state,
                authFetching: false,
                authFetched: true,
                isLoggedIn: true,
            }
        }
        case "SET_AUTHENTICATION_MANUAL": {
            return {
                ...state,
                isLoggedIn: action.payload,
            }
        }
        case "FETCH_USERDATA": {
            return {...state, fetching: true}
        }
        case "FETCH_USERDATA_REJECTED": {
            return {...state, fetching: false, error: action.payload}
        }
        case "FETCH_USERDATA_FULFILLED": {
            return {
                ...state,
                fetching: false,
                fetched: true,
                userData: action.payload,
            }
        }
        default: {
            return state
        }
    }
}