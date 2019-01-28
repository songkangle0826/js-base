import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import action from '../store/action/index'


class C extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return <div className={'panel-heading'}>我是C组件</div>
	}
}

export default C