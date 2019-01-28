import React from 'react';
import { connect } from 'react-redux'
import action from '../../store/action';

/*
 * 相对于传统的REDUX，我们做的步骤优化
 * 	1.导出的不再是我们创建的组件，而是基于CONNECT构造后的组件
 *  	connect([mapStateToProps],[mapDispatchToProps])(自己创建的组件)
 *  2.react-redux帮我们做了一件非常重要的事，以前我们需要自己基于SUBSCRIBE向事件池追加方法，已达到容器状态信息改变，执行我们追加的方法，重新渲染组件的目的，但是react-redux不用了，react0redux帮我们做了这件事，多有用到REDUX容器状态信息的组件，都会向事件池中追加一个方法，当状态信息改变，通信方法执行，把最新的状态信息作为属性传第给组件，组件的属性值改变了，组件也会重新渲染
*/


class VoteBase extends React.Component{
	/*constructor(props){
		super(props)
		/！*  
			真实项目中，我们会把REDUX容器中的状态信息获取到，赋值给我组件的状态或者是属性（REACT-REDUX），这么做的目的，当REDUX中的状态改变，我们可以修改组件中的状态
		*！/
		// let reduxVoteState = this.props.store.getState().vote;
		// this.state = {
		// 	...reduxVoteState
		// }
	}
	// componentWillMount(){
	// 	this.props.store.dispatch(
	// 		action.vote.init({
	// 			title: '高铁要比飞机快！',
	// 			n: 100,
	// 			m: 0
	// 		})
	// 	)
	// 	let reduxVoteState = this.props.store.getState().vote;
	// 	this.setState({
	// 		...reduxVoteState
	// 	})
	// }

	// //=>向发布订阅事件池中追加一个方法，监听REDUX容器中的状态改变，状态改变冲刺你渲染
	// componentDidMount(){
	// 	this.props.store.subscribe(()=>{
	// 		let reduxVoteState = this.props.store.getState().vote;
	// 		this.setState({
	// 			...reduxVoteState
	// 		})	 
	// 	})
	// }
	*/

	constructor(props){
		super(props)
		console.log(this.props)
	}

	componentWillMount(){
		let initData = {
			title: '西安真美丽！',
			n: 100,
			m: 0
		}
		this.props.init(initData)
	}

	render(){
		let { title,n,m } = this.props;
		return <React.Fragment>
			<div className={'panel-heading'}>{ title }</div>
			<div className={'panel-body'}>
				支持数：<span>{ n }</span>
				<br/>
				反对数：<span>{ m }</span>
			</div>
		</React.Fragment>
	}
	
}

/*
//=>把redux容器中的信息状态遍历，赋值给当前组件的属性（state）
let mapStateToProps = (state) =>{
	//state: 就是容器中的状态信息
	//我们返回的是啥，就把他挂载到当前的属性上（redux存储很多信息，我们想用啥就返回啥杰克）
	return {
		...state.vote
	}
}
// => 把REDUX中的DISPATCH派发行为遍历，也赋值给组件的属性（ActionCreate）
let mapDispatchToProps = (dispatch)=>{
	//=>dispatch:STORE中存储的DISPATCH方法
	// 返回的是啥，就相当于把啥挂载到组件的属性上（一般我们挂载一些方法，这些方法中完后曾了DISPATCH派发任务操作）
	return {
		init(initData){
			dispatch(action.vote.init(initData));
		}
	}
}


export default connect(mapStateToProps,mapDispatchToProps)(VoteBase);
*/

export default connect((state)=>({ ...state.vote }),action.vote)(VoteBase)
// =>React-redux帮我们做了一件事，把ACTION-CREATOR中编写的方法（返回ACTION对象的方法），自动构建成DISPATCH派发任务的方法，也都是mapDispatchToProps这种格式