import React from 'react';
import ReactDOM from 'react-dom';
import Vote from './component/Vote.js'


import { createStore } from 'redux';

/*
 * reducer作用：
 *	1. 记录聊聊所有状态修改的信息（根据行为标识走不同的修改任务）
 *  2.修改了容器中的状态信息
 *
 *  参数
 		state: 容器中原有的状态信息（如果第一次使用，没有原有状态，给一个初始默认值）
 		action：dispatch任务派发的时候传递的行为对象（这个对象中必须有一个type属性，时操作的行为标识，reducer就是根据这个行为标识来识别该如何修改状态信息的）
*/
let reducer = (state={n:0,m:0},action) =>{
	// state 原有的状态信息
	// action
	let { type } = action;
	switch (action.type){
		case 'VOTE_SUPPORT':
			state = {...state,n:state.n+1}
			break;
		case 'VOTE_AGAINST':
			state = {...state,m:state.m+1}
	}
	return state; // 只有把最新的STATE返回，原有的状态才会被修改
}

// 创建容器：需要把REDUCER传递进来，（REDUCER登记了所有状态更改的方信息，REDUCER是一个函数）
let store = createStore(reducer);
/*
 * 创建的STORE中提供三个方法
 * dispatch： 派发行为（传递一个对象，对象中有一个TYPE属性），通知reducer修改状态信息
 * subscribe：事件池追加方法
 * getState：获取最新的管理状态信息
*/















ReactDOM.render(<main>
	<Vote title={'中美大战，中国必胜!'}
		count={{
			n:100,
			m: 0
		}}
	store={ store }/>
</main>, document.getElementById('root'))