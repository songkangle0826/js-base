import * as TYPE from '../reducer-types.js';

let custom = {
	// =>同步
	/*create(payload){
		return {
			type: TYPE.CUSTOM_CREATE,
			payload
		}
	}*/

	// =》 异步 react-thunk
	/*create(payload){
		// redux-thunk中间件语法
		// DISPATH都传递给我们了，我们向什么时候派发，自己搞定即可
		return dispath =>{
			setTimeout(()=>{
				dispath({
					type: TYPE.CUSTOM_CREATE,
					payload
				})	
			},3000)	
		}
	}*/

	// =》 异步 react-thunk
	create(payload){
		// =>Promise中间件的语法
		return {
			type: TYPE.CUSTOM_CREATE,
			// 传递给REDUCER的PAYLOAD需要等待Promise成功，把成功的结果传递过去
			payload: new Promise(reslove=>{
				setTimeout(()=>{
					reslove(payload)
				},3000)
			})
		}
	}

}

export default custom;