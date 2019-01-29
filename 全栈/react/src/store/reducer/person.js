import * as TYPES from '../action-types';


function person(state={

},action){
	state = JSON.parse(JSON.stringify(state))
	switch(action.type){
		case 1:

			break;
		default:
			break;
	}
	return state;
} 

export default person;