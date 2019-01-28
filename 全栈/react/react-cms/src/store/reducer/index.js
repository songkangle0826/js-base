import { combineReducers } from 'redux';

import home from './home';
import plan from './plan';
import custom from './custom';



let reducer = combineReducers({
	home,
	plan,
	custom
})

export default reducer;