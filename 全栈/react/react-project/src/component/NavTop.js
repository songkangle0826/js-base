import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class NavTop extends Component{
	constructor(props){
		super(props)
	}
	render(){
		return <header className='headerNavBox'>
			我是头部导航
		</header>
	}
}

export default withRouter(connect()(NavTop));
