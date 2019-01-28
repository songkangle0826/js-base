import React from 'react';
import { connect } from 'react-redux';

class Plan extends React.Component{
	constructor(props){
		super(props)
		this.state = {};
	}
	render(){
		return <div>
			我是计划管理PLAN
		</div>
	}
}


export default connect()(Plan)