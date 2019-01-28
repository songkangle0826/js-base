import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import action from '../../store/action' 


class VoteFooter extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		let { store:{dispatch} } = this.props;
		return <div className={'panel-footer'}>
			<button className='btn btn-success' 
				onClick={ ()=>{
					this.props.store.dispatch(action.vote.support());
				} }>支持</button>
				&nbsp;&nbsp;&nbsp;&nbsp;
			<button className='btn btn-warning' 
				onClick={ ()=>{
					this.props.store.dispatch(action.vote.against());
				} }>反对</button>
		</div>

	}
}

export default VoteFooter;