import { applyMiddleware, createStore, compose} from "redux"

import ReduxThunk from 'redux-thunk';

import reducer from './reducers';

const middleware = applyMiddleware(ReduxThunk);

export default createStore(reducer, middleware);