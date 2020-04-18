import { combineReducers } from "redux";
import BusinessReducer from './businessReducer';
import UserReducer from './userReducer'
import EventsReducer from './eventsReducer';

export default combineReducers({
    business: BusinessReducer,
    user: UserReducer,
    events: EventsReducer,
});