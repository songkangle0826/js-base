/*
 * 每个板块单独的ACTION—CREATOR：就是把DISPATCH派发时候需要传递的ACTION对象进一步统一封装处理（REACT-REDUX中我们体验它的好处）
*/ 

import  * as TYPE from '../action-type.js';
let vote = {
	support(){
		// =》 DISPATCH派发的时候需要传递啥就返回啥
		return {
			type: TYPE.VOTE_SUPPORT
		}
	},
	against(){
		return {
			type: TYPE.VOTE_AGAINST
		}
	}
}

export default vote;