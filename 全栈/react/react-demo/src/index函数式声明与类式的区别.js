// 组件的状态 ==》 数据驱动思想
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
/*
 * REACT中的组件又两个重要的概念
 * 	1.组件的属性：【只读】调取组件的时候传递过来的消息
 *  2.组件的状态：【读写】自己在组件中设定和规划的（只有类式生命式组件才有状态的管控，函数式组件声明不存在状态管理的）
		-》 组件状态类似于VUE中的数据驱动：我们数据绑定的时候式基于状态值绑定，当修改组件状态后，对应的JSX元素也会跟着重新渲染（差异渲染，只把数据改变的部分重新渲染，基于DOM-DIFF算法来完成）	
		=》 当代框架最重要的核心思想就是“数据操控视图（视图影响数据）”，让我们告别JQ手动操作DOM的时代，我么不以后只需要改变数据，框架会帮我们重新渲染视图，从而减少直接操作DOM（提高性能，也有助于开发效率）
 *  3. 
*/


/*
 *  所谓函数式组件式静态组件：和执行普通方法一样，调用组件中的内容获取到，插入到页面中，如果不重新调取组件，显示的内容式不会发生变化
 *  真实项目中只有调取组件，组件中的内容不会再次改变的情况下，我们才可能使用函数式组件
*/

/*function Clock(){
	return <section>
		<h3>当前北京时间为：</h3>
		<div style={{color:'red'}}>{ new Date().toLocaleString() }</div>
	</section>
}
setInterval(()=>{
	// =》每间隔1000MS重新调取组件，然后渲染到页面中
	ReactDOM.render(<Clock/>,document.getElementById('root'))
},1000)*/



class Clock extends React.Component{
	constructor(){
		super()
		// -> 初始化组件的状态(都是对象类型的)：要求我们在CONSTRUCTOR中需要把后期使用的状态信息全部初始化一下（约定俗称的语法规范）
		this.state = {
			time: new Date().toLocaleString()
		};
	}
	async componentDidMount(){
		// =》REACT生命周期函数之一：第一次组件渲染完后后（我们在这里只需要间隔1000MS把STATE状态中的TIME数据改变，这样REACT会帮我们把组件中的部分内容重新渲染）、
		/*
			//=》把异步的set-state修改为同步
			await this.setState({
				time: new Date().toLocaleString()
			})

		*/
		setInterval(()=>{
			// REACT中虽然下面方式可以修改状态，但是并不会通知react重新渲染页面，所以不要这样操作和修改状态
			// this.state.time = new Date().toLocaleString();

			/*
			 * 修改组件的状态
			 * 1.修改部分状态：会用我们传递的对象和初始化的STATE进行匹配，只会把我们传递的属性进行进行修改，没有传递都得依然保留原始的状态信息（部分状态修改）
			 * 2.当状态修改完成，会通知REACT把组建jsx中的部分元素重新进行渲染
			*/
			this.setState({
				time: new Date().toLocaleString()
			})
			//=》 当通知REACT把需要重新渲染的JSX元素渲染完成后，执行的回调操作（类似于声明周期函数中的componentDidUpdate,项目中一般使用钩子函数而不是这个回调）
			//=》 设置回调的原因：set-state是异步操作
		},1000)
	}

	render(){
		return(
			<section>
				<h3>当前北京时间为：</h3>
				<div style={{color:'red'}}>
					{/* 获取组件的状态信息 */}
					{ this.state.time }
				</div>
			</section>
		)
	}
}

ReactDOM.render(<Clock/>,document.getElementById('root'))