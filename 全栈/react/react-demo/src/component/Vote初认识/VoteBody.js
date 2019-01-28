import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

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

export default VoteBody;