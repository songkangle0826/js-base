// 每个模块的redux容器中状态，index是把所有的reducer合并成为一个（一个store中只能有一个reducer）
import { combineReducers } from 'redux';
import vote from './vote';
import personal from './personal';

/*
 * 合并REDUCE的时候，为了保证每一个板块管理的状态信息不冲突，在redux中按照指定的名称单独划分板块的状态

 * {
	 vote:{
		title:'',
		n:0,
		m:0,
	 },
	 personal:{}
 }
*/

let reducer = combineReducers({
	vote,
	personal
})

export default reducer;
