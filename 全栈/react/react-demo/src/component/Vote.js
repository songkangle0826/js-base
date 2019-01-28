import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import action from '../store/action/index'


class VoteHead extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		let { store } = this.props;
		return <div className={'panel-heading'}>{ this.props.title }</div>
	}
}

class VoteBody extends React.Component{
	constructor(props){
		super(props);
		// =>init_State
		let { store:{ getState} } = this.props;
		console.log(getState().vote)
		let { n,m } = getState().vote
		console.log(n,m)
		this.state = {
			n,m
		}
	}
	componentDidMount(){
		let { store:{ getState,subscribe } } = this.props;
		let unsubscribe = subscribe(()=>{
			let {n,m} = getState().vote;
			this.setState({
				n,m
			}) 
		})
		//unsubscribe();把当前追加的方法移除，解除绑定的方式
	}
	render(){
		let { store } = this.props;
		let { n,m } = this.state;
		let rate =(n+m)===0?'0':(n/(n+m)*100).toFixed(2)+'%';
		return <div className={'panel-body'}>
			支持数：<span>{ n }</span>
			<br/>
			反对数：<span>{ m }</span>
			<br/>
			支持比率：<span>{ rate }</span>
		</div>
	}
}

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



export default class Vote extends React.Component{
	static defaultProps = {
		"title":''
	}
	constructor(props){
		super(props);
	}
	render(){
		let { store } = this.props;
		return <section className={'panel panel-default'}>
			<VoteHead title={ this.props.title } />
			<VoteBody store= {store }/>
			<VoteFooter store= {store }/>
		</section>
	}
}