import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Icon } from 'antd';

/* Transition */
import Transition from 'react-transition-group/Transition';


const duration = 300;
const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
}
const transitionStyles = {
  entering: { 
  	opacity: 0,
  	zIndex: -1,
  	display: 'none'
  },
  entered:  { 
  	opacity: 1,
  	zIndex: 9999,
  	display: 'block'
  },
};



class NavTop extends Component{
	constructor(props){
		super(props)
		this.state = {
			in: false
		}
	}
	render(){
		return <header className='headerNavBox'>
			{/* 首页的导航 */}
			<div className='homeBox'>
				<div className='bassBox'>
					<h1 className='logo'>小司教育</h1>
					<Icon onClick={ this.iconClick } className='icon' type="bars" style={ {fontSize:'0.4rem'} } />
				</div>

				<Transition in={ this.state.in } timeout={0}>
					{ (state) => {
							return <ul className='filterBox' style={ {
								...defaultStyle,
        						...transitionStyles[state],
        						display: this.state.in?"block":"none",
        						zIndex: this.state.in? 999:-1
        					} }>
								<li>全部课程</li>
								<li>VUE课程</li>
								<li>REACT课程</li>
								<li>小程序课程</li>
							</ul>
						}
					}
				</Transition>
			</div>
		</header>
	}
	iconClick = () => {
		this.setState({
			in: !this.state.in
		})
	}
}

export default withRouter(connect()(NavTop));
