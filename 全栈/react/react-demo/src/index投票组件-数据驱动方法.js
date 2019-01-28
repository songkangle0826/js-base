import React from 'react';
import ReactDOM from 'react-dom';
import propTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.css'


/*
 JSX中的事件绑定
 ···
	render(){
		return <button className='btn btn-success' 
				onClick={ this.supportIndex }>支持</button>
	}
	supportIndex(ev){
		//=》this：undefined（不是我们理解的当前操作元素）
		//=》ev.target:通过事件源可以获取当前操作的元素（一般很少操作，因为框架主要是数据驱动Dom的改变）
	}
 ...

 ...
 	render(){
		return <button className='btn btn-success' 
				onClick={ this.supportIndex.bind(this) }>支持</button>
	}
	supportIndex(ev){
		//=》this：继承上下文的THIS（实例），真实项目中，给JSX元素绑定的事件方法一般都是箭头函数，目的是为了保证函数中的this还是实例
	}

	supportIndex=ev=>{

	}

*/


class Vote extends React.Component{
	// =>组件传递的属性是只读的，我们为其设置的默认值和相关规则
	static defaultProps = {

	}
	static propTypes = {
		title: propTypes.string.isRequired
	}
	constructor(props){
		super(props);
		// =》 init state
		this.state = {
			support: 0,
			opposition: 0
		}
	}
	render(){
		// => THIS:实例
		let { title } = this.props;
		let { support,opposition } = this.state;
		let rate = (support+opposition)===0?'0%':(support/(support+opposition)*100).toFixed(2)+'%';
		return <section className='panel panel-default' style={{width:'60%', margin:'20px auto'}}>
			<div className='panel-heading'>
				<h3 className='panel-title'>{ title }</h3>
			</div>
			<div className='panel-body'>
				支持人数: { support }
				<br/>
				<br/>
				反对人数: { opposition }
				<br/><br/>
				支持率：{ rate }
			</div>
			<div className='panel-footer'>
				<button className='btn btn-success' 
				onClick={ this.supportIndex }>支持</button>
				&nbsp;&nbsp;&nbsp;&nbsp;
				<button className='btn btn-warning' 
				onClick={ this.oppositionIndex }>反对</button>
			</div>
		</section>
	}

	// => 投票：支持
	supportIndex=ev=>{
		this.setState({
			support:this.state.support+1
		})
	}
	// => 投票：反对
	oppositionIndex=ev=>{
		this.setState({
			opposition:this.state.opposition+1
		})
	}

}


ReactDOM.render(<main>
	<Vote title='世界杯小组赛法国VS秘鲁，法国队必胜' />
	<Vote title='虞海？' />
</main>,document.getElementById('root'))