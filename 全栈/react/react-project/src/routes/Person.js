import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect} from 'react-router-dom';

import Tip from './person/Tip';
import Info from './person/Info';
import Login from './person/Login';
import Register from './person/Register';

import '../static/css/person.less';


/* IMPORTAPI */ 
import { checkLogin, queryInfo } from '../api/person.js';


class Person extends Component{
	constructor(props){
		super(props)
		this.state = {
			isLogin: false
		}
	}
	// 验证是否未登录
	async componentWillMount(){
		let result = await checkLogin();
		let isLogin = parseFloat(result.code) === 0 ? true : false
		this.setState({
			isLogin: isLogin
		})
	}

	async componentWillReceriveProps(){
		console.log("我一直走update")
		
		let result = await checkLogin();
		let isLogin = parseFloat(result.code) === 0 ? true : false
		this.setState({
			isLogin: isLogin
		})
		console.log(this)
	}
	/*
 	 * 我们之前聊过，当路由切换的时候，对应的组件会重新的渲染，但是渲染也要分情况
 	 * 1.之前渲染其他组件的时候吧当前组件彻底从页面中移除了，再次渲染当前组件，走的第一次挂载的流程（也就是一切从头开始）
 	 * 2.如果当前组件之前没有彻底在页面中移除（本组件内容的子组件在切换），每一次走的史更新的流程，不是走的重新渲染的流程
	*/ 



	// 路由校验必须同步的才可以
	render(){
		return <section>
			<Switch>
				{/* /
					//路由的校验和渲染是同步的,不允许在校验中出现异步,因为这样在异步没有完后之前,根本不知道渲染谁,语法不支持这样做
				<Route path='/person/info' render={ ()=>{
					// =>是否登录全局校验 
					let result = checkLogin();
					if(parseFloat(result.code) === 0){
						return <Info />
					}
					return <Tip />
				} } /> 
				*/}
				<Route path='/person/info' render={ () => {
					//基于RENDER返回的组件不是受路由管控的组件
						if (this.state.isLogin) {
							return <Info />
						}
						return <Tip />
				} }/>
				<Route path='/person/login' component={ Login }/>
				<Route path='/person/register' component={ Register } />
				<Redirect from='/person' to='/person/info' />
			</Switch>
		</section>
	}
}

export default connect()(Person)
