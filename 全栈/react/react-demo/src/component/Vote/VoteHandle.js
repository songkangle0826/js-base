import React from 'react'
import action from '../../store/action';

import { connect } from 'react-redux';


class VoteHandle extends React.Component{
	constructor(props){
		super(props)
	}
	// render(){
	// 	return <div className='panel-footer'>
	// 		<button className='btn btn-success' onClick={()=>{
	// 			this.props.store.dispatch(action.vote.support())
	// 		}}>支持</button>
	// 		&nbsp;&nbsp;&nbsp;&nbsp;
	// 		<button className='btn btn-warning' onClick={()=>{
	// 			this.props.store.dispatch(action.vote.against())
	// 		}}>反对</button>
	// 	</div>
	// }

	render(){
		return <div className='panel-footer'>
			<button className='btn btn-success' onClick={ this.props.support }>支持</button>
			&nbsp;&nbsp;&nbsp;&nbsp;
			<button className='btn btn-warning' onClick={ this.props.against }>反对</button>
		</div>
	}
	
}

let mapStateToProps = (state)=> {
	return {

	}
}

let mapDispatchToProps = (dispatch)=>{
	return{
		support(){
			dispatch(action.vote.support())
		},
		against(){
			dispatch(action.vote.against())
		}
	}
}

export default connect(state=>({...state.vote}),action.vote)(VoteHandle);