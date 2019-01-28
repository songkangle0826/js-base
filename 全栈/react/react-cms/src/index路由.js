import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter,Route,Switch,Redirect } from 'react-router-dom';
import { Provider }  from 'react-redux';
import store from './store';
import 'bootstrap/dist/css/bootstrap.css';
import './static/common/common.css'

import Nav from './component/Nav';
import Home from './routes/Home';
import Plan from './routes/Plan';
import Custom from './routes/Custom';

/*
 * withRouter: 这个方法的意思是把一个非路由管控组件，模拟称为路由管控的组件
	<Router path='' component={}>
	
	with-router(connect()(NAV)) 先把基于connect高阶一下，返回的是一个代理组件PROXY，把返回的组件受路由管控
	
 * 受路由管控组件的一些特点
 	1.只有当前页面的哈希地址（/#/../..）和路由指定的地址（path）匹配，才会把对用的组件渲染
	with-Router是没有地址匹配，都被模拟称为受路由管控的
	2.路由切换的原理，凡是匹配的路由，都会把对应得组件内容重新添加到页面中，相反，不匹配得都会在页面中移除掉，下一次重新匹配上，组件需要重新渲染到页面中。每一次路由切换得时候，页面得哈希路由地址改变，都会从一级路由开始重新校验一遍。
	3.所有受路由管控得组件，在组件得属性Props上都默认添加了三个属性：
		HISTORY
			PUSH 向池子中追加一条新的信息，达到切换到指定路由地址得目的
				this.props.hsitory.push("/plan") js中实现路由切换
			GO 跳转到指定得地址（传得是索引 0当前 -1 上一个 -2上两个）
			GO-BACK <=> go(-1) 回退到上一个地址
			GO-FORWARD	<=> go(1) 先前走一步
			....
		LOCATION 获取当前哈希路由渲染组件得一些信息
			hash
			pathname 当哈希路由地址
			search	当前页面问号传参值 ?lx=unsafe
			state 	基于REDIRECT/Link/NAVLINK的TO，传递的是一个对象，对象中编写的STATE，就可以在LOCALTION.state中获取到
		MATCH	获取当前路由匹配的结果
			isExact: false  //是否为严格匹配
			path: "/"
			url: "/"
			params: {}: 如果当前路由匹配的是地址参数，则这里可以获取传递的参数值
*/


ReactDOM.render(<Provider store={ store }>
	<HashRouter>
		<div>

			<Nav />
			{/* 基于HASH-ROUTER展示不同得页面 */}
			<Switch>
				<Route path='/' exact component={ Home }/>
				<Route path='/custom' component={ Custom }/>
				<Route path='/plan' component={ Plan }/>
				<Redirect to="/?lx=404" />
			</Switch>
		</div>
	</HashRouter>
</Provider>, document.getElementById('root'));