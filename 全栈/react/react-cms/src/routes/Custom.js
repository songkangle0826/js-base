import React from 'react';
import { connect } from 'react-redux';
import { Route,Redirect,Switch,NavLink } from 'react-router-dom'

import List from './custom/List';
import Create from './custom/Create'
import Detail from './custom/Detail'

class Custom extends React.Component{
	constructor(props){
		super(props)
		this.state = {}
	}
	render(){
		return <section>
			{/* 左侧导航 */}
			<ul className='nav nav-pills nav-stacked col-md-2'>
				<li className='presentation'><NavLink to="/custom/list">客户列表</NavLink></li>
				<li className='presentation'><NavLink to="/custom/create">增加客户</NavLink></li>	
			</ul>

			{/* 右侧展示内容 */}
			<div className='col-md-10'>
				<Switch>
					<Route path='/custom/list' component={ List } />
					<Route path='/custom/create' component={ Create } />
					<Route path='/custom/Detail/:id' component={ Detail } />
					{/* 进入到客户管理页面，我们让其默认展示LIST区域内容 */}
					<Redirect from='/custom' to='/custom/list' />
				</Switch>
			</div>
		</section>
	}
}


export default connect()(Custom);