import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class VoteHead extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		let { store } = this.props;
		return <div className={'panel-heading'}>{ this.props.title }</div>
	}
}

export default VoteHead;