import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import action from '../store/action/index'


class B extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return <div className={'panel-heading'}>我是B组件</div>
	}
}

export default B