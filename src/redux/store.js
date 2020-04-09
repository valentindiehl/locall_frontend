import { applyMiddleware, createStore, compose} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';

import ReduxThunk from 'redux-thunk';

import reducer from './reducers';

const middleware = applyMiddleware(ReduxThunk);

export default createStore(reducer, composeWithDevTools(middleware));