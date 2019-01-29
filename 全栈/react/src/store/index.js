import { createStore, applyMiddleware  } from 'redux';
import reduxThunk from 'redux-thunk';
import reduxPromise from 'redux-promise';
import reduxLogger from 'redux-logger';

import reducer from './reducer';

let store = createStore(reducer,applyMiddleware(reduxLogger,reduxPromise,reduxThunk))

export default store