import * as TYPE from '../reducer-types.js';


function custom(state={
	data: [{
		id:1,
		name: '哈哈哈'
	}]
},action){
	state = JSON.parse(JSON.stringify(state));
	switch(action.type){
		case TYPE.CUSTOM_CREATE:
			// => 增加客户
			let { payload } = action;
			state.data.push(payload)
			break;
	}
	return state;
}
export default custom;