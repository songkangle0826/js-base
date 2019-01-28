import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import action from '../store/action/index'


class A extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return <div className={'panel-heading'}>我是A组件</div>
	}
}

export default A