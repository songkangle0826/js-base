import * as TYPE from '../action-types.js'

/*
 * 如果redux中原有的状态不存在，我们会设置一个初始值
*/

function vote(state={
	title: '',
	n: 0,
	m: 0
},action){
	switch(action.type){
		case TYPE.VOTE_TITLE:
			state = {...state,title:action.title}
			break;
		case TYPE.VOTE_SUPPORT:
			state = {...state,n:state.n+1}
			break
		case TYPE.VOTE_AGAINST:
			state = {...state,m:state.m+1}
			break;
		case TYPE.VOTE_INIT:
			// state = {...state}
			// for(let attr in action){
			// 	if(action.hasOwnProperty(attr)){
			// 		if (attr==='type') continue;
			// 		state[attr] = action[attr];
			// 	}
			// }

			let { title='',n = 0,m = 0 } =action;
			state = {...state,title,n,m}

			break;
		default:
			break;
	}
	return state
}

export default vote