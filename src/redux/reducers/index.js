import { combineReducers } from "redux";
import BusinessReducer from './businessReducer';
import UserReducer from './userReducer'

export default combineReducers({
    business: BusinessReducer,
    user: UserReducer,
});