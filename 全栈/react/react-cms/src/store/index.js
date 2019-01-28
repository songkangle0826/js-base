// 创建
import { createStore, applyMiddleware } from 'redux';
import reduxLogger from 'redux-logger';
import reduxThunk from 'redux-thunk';
import reduxPromise from 'redux-promise';
import reducer from './reducer/index';

let store = createStore(reducer,applyMiddleware(reduxLogger,reduxThunk,reduxPromise));
export default store; 


/*
 * REDUX中间件
 * 	redux-logger 能够在控制台清晰的展示出REDUX操作的流程和信息（原有状态，派发信息，修改后的状态）

 *  redux-thunk: 处理异步的DISPATCH派发

 *  redux-promise: 在DISPATCH支持promise操作
 
 
*/