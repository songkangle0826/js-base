import React,{ Component } from 'react';
import { connect } from 'react-redux';

class Person extends Component{
	constructor(props){
		super(props)
	}
	render(){
		return <div>
			个人中心
		</div>
	}
}

export default connect()(Person)
