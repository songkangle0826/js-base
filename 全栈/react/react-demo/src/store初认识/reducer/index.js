/*
 * 把每一个模块单独设定的REDUCER函数最后合并成为总的REDUCER
 *  为了保证合并REDUCER过程中，每个模块管理的状态信息不会相互冲突，redux在合并的过程中把容器中的状态进行分开管理,（以合并REDUCER时候设置的属性名做为状态划分属性名，把各个板块管理的状态放到自己的属性下即可）
 	STATE = {
		vote: {
			n: 0,
			m: 0
		},
		personal: {
			baseInfo:{}
		}
 	}
	
	STORE.GET-STATE().VOTE.N  以后获取信息的时候，也需要把VOTE等板块加上了;

 * combineReducers 合并所有的模块的reducer
*/
import { combineReducers } from 'redux';
import vote from './vote';
import personal from './personal';


// combineReducers 合并所有的模块的reducer
let reducer = combineReducers({
	vote,
	personal
})

export default reducer;
