import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';
import { Icon } from 'antd';


class NavBottom extends Component{
	constructor(props){
		super(props)
	}
	render(){
		return <footer className='footerNavBox'>
			<NavLink to='/course' exact><Icon type="home" style={ { fontSize: '0.2rem' } } />
				<span>首页</span>
			</NavLink>
			<NavLink to='/mycourse'><Icon type="solution" style={ { fontSize: '0.2rem' } }/>
				<span>我的课程</span>
			</NavLink>
			<NavLink to='/person'><Icon  type="user" style={ { fontSize: '0.2rem' } } />
				<span>个人中心</span>
			</NavLink>
		</footer>
	}
}

export default withRouter(connect()(NavBottom));
