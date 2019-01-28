import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import VoteBase from './component/Vote/VoteBase';
import VoteHandle from './component/Vote/VoteHandle';

import { Provider,connect }  from 'react-redux'
/*
 * REACT-REDUX是把REDUX进一步封装，适配REACT项目，让REDUX操作更简洁
 	STORE文件夹中的内容和redux一模一样
 	在组件调取使用的时候可以优化一些步骤

 * Provider 根组件
 	--当前整个项目都在Provider组件下，作用就是把创建的STORE可以供内部任何后代组件使用（基于上下文呢完成的）
 		=>provider组件中只允许出现一个子元素
 		=》把创建的STORE基于属性传递给PRovider（这样后代组件中都可以使用这个STORE了）
 * connect 高阶组件
 	-- 
*/ 

import store from './store/index';


ReactDOM.render(<Provider store={ store }>
	<section className={'panel panel-default'}>
		<VoteBase/>
		<VoteHandle/>
	</section>
</Provider>,document.getElementById('root'));