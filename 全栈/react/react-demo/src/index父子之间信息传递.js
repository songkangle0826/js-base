import React from 'react';
import ReactDOM from 'react-dom';
import propTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.css'


/*
父组件把信息传递给子组件：
	基于属性传递即可（而且传递是单方向得：只能父亲通过属性把信息传递给儿子，儿子不能直接把信息作为属性传递给父亲）
	
	后期子组件中得信息要修改：可以让父组件传递给子组件得信息发生变化（也就是子组件接受得属性发生变化子组件会重新渲染 =》 componentWillReceiveProps钩子函数）
	
	只要实现点击子组件按钮得时候，可以修改父组件PANEL的状态信息，panel的状态改变，panel回重新执行RENDER渲染，而重新执行RENDER的时候，会把最新的状态值作为哦属性，传递给子组件HEAD，HEAD接受的属性值发生变化，HEAD组件也会重新渲染。

	类似于这种”子改父“的操作，我们需要是要以下技巧完后
		1.把父组件中的一个方法，作为属性传弟给子组件
		2.在子组件中，把基于属性传递进来的方法，再合适的时候执行（相当于在执行父组件的方法，而这个方法中完全可以操作父组件中的信息）
*/ 


/* HEAD */
class Head extends React.Component{
	constructor(props){
		super(props)
		
	}
	render(){
		return <div className='panel-heading'>
			<h3 className='panel-title'>
				{/* 子组件通过属性获取父组件传递过来得内容 */}
				点击次数: {  this.props.count }
				
			</h3>	
		</div>
	}
} 
/* BODY */
class Body extends React.Component{
	constructor(){
		super()
	}
	render(){
		return <div className='panel-body'>
			<button className='btn btn-success' onClick={ this.props.callback }>点我啊！</button>	
		</div>
	}
} 


class Panel extends React.Component{
	constructor(){
		super()
		this.state = {
			n:0
		}
	}

	fn = () => {
		//修改PANEL的状态信息
		this.setState({
			n: this.state.n+1
		})
	}
	render(){
		return <section className='panel panel-default'>
			
			{/*  父组件中在调取子组件得时候，把信息通过属性传递给子组件 */}
			<Head count={ this.state.n } />
			{/* 父组件把自己的一个方法基于属性传递给子组件，目的是在子组件中执行这个方法 */}
			<Body callback = { this.fn } />
		</section>
	}
}



ReactDOM.render(<Panel />,document.getElementById('root'))