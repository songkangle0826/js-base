// 工程化redux目录
/*
 * store
 *	reducer: 存放每一个模块的reducer
 		vote.js
 		Personal.js
 		...
 		index.js 把每一个模块的reducer最后合并称成为一个reducer

 * action 存放每一个模块需要进行的派发任务（ActionCreator）
 		vote.js
 		Personal.js
 		...
 		index.js
 * action-type.js 所有派发任务的行为标识都在这里进行宏观管理
 * index.js 创建STORE
*/


// 入口文件- 创建store

import { createStore } from 'redux';
import reducer from './reducer/index';

let store = createStore(reducer);

export default store;


