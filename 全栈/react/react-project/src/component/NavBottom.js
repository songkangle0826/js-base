import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class NavBottom extends Component{
	constructor(props){
		super(props)
	}
	render(){
		return <div>
			我的课程
		</div>
	}
}

export default withRouter(connect()(NavBottom));
