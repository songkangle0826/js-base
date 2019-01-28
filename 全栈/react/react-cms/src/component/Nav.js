import React from 'react';
import { connect } from 'react-redux';
import { Link, NavLink, withRouter } from 'react-router-dom'


/*
 * Link: 是react-router中提供得路由切换组件，基于它可以实现点击得时候路由切换
 	  to 【string】 跳转到指定得路由地址
 	  to 【Object】 可以提供一些参数配置项（和Redirect类似）
 	  	{
			PATHNAME: 跳转地址
			SERACH: 问号传参
			STATE： 基于这种方式传递信息
			
 	  	}
 	  replace： FALSE（默认值）是替换HISTORY， STACK中当前得地址（TRUE，还是追加一个新得地址（FALSE））
	
	原理： 基于LINK组件渲染，渲染后的结果就是一个a标签，To对应的信息最后变为HERF中的内容
		<a href='#/?lx-logo'></a>

	-------------

	react-router中提供的组件都要在任何一个Router包裹的范围内使用
 *
 * NAVLINK: 和LINK类似，都是为了实现路由跳转的，不同在于，NAVLINK组件在当前页面HASH和组件对应地址吻合的时候，会默认给组件加一个actived样式，让其有选中效果后的A标签的设置默认样式类：active
	和link类似，TO和REPLACE的属性
	to 【string】
	to 【object】 
	activeClassName ： 把默认加的active样式改成自己的
	activeStyle: 给匹配的这个NAVLINK设置行内样式

	exact && strict 控制匹配的时候是否为严格匹配

	isActive ：匹配后执行一个函数

	<NavLink to='/custom' activeClassName=>最后也会转换为A标签，如果当前页面的为HASH地址和组件中的TO地址匹配了，则会给渲染后的a
*/

class Nav extends React.Component{
	constructor(props,context){
		super(props,context)
		// console.log(props)
		this.state = {
			count: 1
		}
	}
	render(){
		return <nav className="navbar navbar-default">
			{/* LOGO */}
			<div className='container-fluid col-md-2'>
				<Link to={ {pathname:'/',search:'?lx=logo'} } className='navbar-brand'>客户管理系统</Link>
			</div>
			{/* NAV */}
			<div className='collapse navbar-collapse col-md-8'>
				<ul className='nav navbar-nav'>
					{/* NAVLINK不是点击谁，谁就有选中样式，（但是可以为患路由，而且当前页面哈希后的地址和NAV-LINK中的TO进行比较，那个才有选中效果） */}
					<li><NavLink onClick={ this.handleClick } to='/' exact activeClassName='' activeStyle={ {color:'red'} }>首页</NavLink></li>	
					{/* /custom/list*/}
					<li><NavLink onClick={ this.handleClick } to='/custom' activeStyle={ {color:'red'} }>客户管理</NavLink></li>	
					<li><NavLink onClick={ this.handleClick } to='/plan' activeStyle={ {color:'red'} }>计划管理</NavLink></li>	
				</ul>
			</div>
		</nav>
	}

	handleClick = ev =>{
		this.setState({
			count: this.state.count + 1
		})
	}

}

export default withRouter(connect()(Nav))