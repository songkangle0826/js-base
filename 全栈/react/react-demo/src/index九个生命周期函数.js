import React from 'react';
import ReactDOM from 'react-dom';

/*
生命周期函数（钩子函数）：
  描述一个组件或者程序从创建到销毁的过程，我们可以在过程中间基于钩子函数完成一些自己的操作（例如：在第一次渲染完成做什么，或者在二次即将重新渲染之前做什么等。。。）

  [基本流程]
    constructor 创建一个组件
    componentWillMount 第一次渲染之前
    render 第一次渲染
    componentDidMount 第一次渲染之后

  [修改流程：当组件的状态数据发生改变（SET-STATE）或者传毒给组件的属性发生改变（重新调用组件传递不同的属性）都会引发RENDER重新执行渲染（渲染也是差异渲染）]
    shouldComponentUpdate 是否允许组件重新渲染 （允许则执行后面函数，不允许直接结束即可）
    componentWillUpdate 重新渲染之前
    render 第二次及以后重新渲染
    componentDidUpdate 重新渲染之后

    componentWillReceiveProps:父组件把传递给子组件的属性发生改变后触发的钩子函数

  [卸载：原有渲染的内容是不消失，只不过以后不能基于数据改变视图了 ]
    componentWillUnmount: 卸载组件之前（一般不用）
*/

function queryData(){
	return new Promise((resolve)=>{
		resolve(2)
	})
}

class A extends React.Component{
	//=>这个是第一次执行的，执行完成后（给属性设置默认值后才向下执行）
	static defaultProps = {};
	constructor(){
		super()
		console.log('1=constructor')
		this.state = {
			n: 1
		}
	}

	// async componentWillMount(){
	// 	console.log('2-componentWillMount-第一次渲染之前',this.refs.HH)
	// 	let result = await queryData();
	// 	console.log(result)
	// 	this.setState({
	// 		n: result
	// 	})
	// }

	// componentWillMount(){
	// 	console.log('2-componentWillMount-第一次渲染之前',this.refs.HH)  //undefined
		
	// 	// =》在WILL_MOUNT中，如果直接的SET-STATE修改数据，会把状态信息改变，然后RENDER和DID_MOUNT;但是如果SET-STATE是放到一个异步操作中完成（例如：定时器或者从服务器数据），也先会执行RENDER和DID，然后在执行这个异步操作修改状态，紧接着走修改的流程（这样和放到DID_MOUNT中也没有啥区别的），所以我们一般把数据请求放到DID处理
	// 	// =》真实项目中的数据绑定，一般第一次组件渲染，我们都是绑定的默认数据，第二次才是绑定的从服务器获取数据，（有些需求我们需要是否存在判断显示隐藏等）
	// 	setInterval(()=>{
	// 		this.setState({
	// 			n: this.state.n+1
	// 		})
	// 	},5000)
	// }
	componentDidMount(){
		console.log('4-componentDidMount-第一次渲染之后',this.refs.HH) // <div>1</div>
		/*
         * 真实项目中在这个阶段一般做如下处理：
         *  1.控制状态信息更改的操作
         *  2.从服务器获取数据，然后修改状态，完成数据绑定
         	。。。
		*/ 
		// setInterval(()=>{
		// 	this.setState({
		// 		n: this.state.n+1
		// 	})
		// },5000)

	}


	componentWillReceiveProps(nextProps,nextState){
		// 组件属性改变
		console.log("组件属性改变",this.props.n,nextProps.n)
	}


	shouldComponentUpdate(nextProps,nextState){
		console.log("5-是否允许更新，函数返回TRUE就是允许，返回FALSE就是不允许");
		
		/*
			在这个钩子函数中，我们获取的STATE不是最新修改的，而是上一次的sSTATE值
			* 例如： 第一次加载完成：5000MS后，我们基于SET
			-STATE把N修改为2，但是此处获取的还是1呢

			* 但是这个方法有两个参数：
			* nextProps：最新修改属性信息
			* nextState 最新修改的状态信息
		*/ 
		if(nextState.n>3){
			return false
		}else{
			return true
		}

		
	}
	componentWillUpdate(nextProps,nextState){
		// 这里获取的状态是更新之前的，（和SHOULD相同也有两个参数存储最新的信息）
		console.log("6-componentWillUpdate:组件更新之前",this.state.n)
	}

	componentDidUpdate(){
		// 这里获取的状态是更新之后的
		console.log("8-componentDidUpdate:组件更新之后",this.state.n)
	}


	render(){
		console.log("RENDER")
		return <div ref='HH'>{ this.state.n }</div>
	}
}

class B extends React.Component{
	constructor(){
		super()
		this.state = {
			n: 1
		}
	}
	componentDidMount(){
		setTimeout(()=>{
			this.setState({
				n:2
			})
		},3000)
	}
	render(){
		return <div>
			{/* 把父组件的状态作为属性传递给子组件 */}
			<A n = { this.state.n } />
		</div>
	}
}




ReactDOM.render(<B />, document.getElementById('root'))