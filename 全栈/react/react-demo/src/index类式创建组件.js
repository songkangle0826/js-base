import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

/*
 * REACT中的组件又两个重要的概念
 * 		1.组件的属性：【只读】调取组件的时候传递过来的消息
 *      2.组件的状态：【读写】自己在组件中设定和规划的（只有类式生命式组件才有状态的管控，函数式组件声明不存在状态管理的）
*/



function Sum(){
	console.log(this) // undefined
	return 111
}

/*
 基于继承COMPONENT类来创建组件
 基于CREATE-ELEMENT把JSX转换为一个对象，当RENDER渲染这个对象的时候，遇到TYPE是一个函数或者类，不是直接创建元素，而是先把方法执行
 	-》如果就是函数式声明组件，就把他当作普通方法执行（方法中的YHIS是UNDEFINED），把函数返回的JSX（也是解析后的对象 ）进行渲染
 	-》如果是类式声明的组件，会把当前类NEW它执行，创建类的一个实例（当前本次调取的组件就是它的实例），执行CONSTRUCTOR之后，会执行THIS.render(),把render中返回的JSX拿过来渲染，所有“类声明式组件，必须有一个RENDER的方法，方法中需要返回一个JSX元素“ 

 	但是不管式哪一种方式，最后都会把解析出来的PROPS属性对象作为实参传递给函数或者类	
*/ 

class Dialog extends React.Component{
	/* this.props是只读的，我们无法在方法中修改它的值，但是可以给其设置默认值或者设置一些规则(例如：设置是否必须传递的以及传递值得类型等)
	 * 设置值得规则需要安装插件prop-types
	*/ 

	// 这种是不符合ES6语法规范的，但是WEBPACK打包编译的时候会把它转换Dailog.defaultProps这种符合规范的
	static defaultProps = {
		lx: '系统提示',

	};

	/* PROP-TYPES是FACKBOOK公司开发得一个插件，基于这个插件我们可以给组件传递得属性设置规则(设置得规则不会影响页面得渲染，但是会在控制台抛出错误)*/
	static propTypes = {
		// con: PropTypes.string // 传递得内容需要是一个字符串
		con: PropTypes.string.isRequired  //=>不仅传递得内容是字符串，并且还必须传递
	}


	constructor(props,context,update){
		// props：当RENDER渲染并且把当前类执行创建实例的时候，会把之前JSX解析出来的PROPS对象中的信息（可能又CHILDREN）传递给参数PROPS，”调取组件传递的属性“

		super(props)  //EX6中的EXTENDS继承，一旦使用了CONSTRUCTOR，第一行位置必须设置SUPER执行：相当于React.Components.call(this),也就是CALL继承，把父类私有的属性继承过来
			// 如果只写super():虽然创建实例的时候，把属性传递进来了，但是并没有传递给父组件，也就是没有把属性挂载到实例上，使用THIS.PROPS获取的结果是undefined
			// 如果SUPER(PROPS):在继承父类私有的时候，就把传递的属性挂载到子类的实例上，CONSTRUCTOR中就可以使用THIS.PROPS了
			// 即使在CONSTRUCTOR中不设置形参PROPS接受属性，执行SUPER的时候也不传这个属性，除了CONTRUCTOR中不能直接使用THIS.PROPS,其他生命周期都可以使用（也就是执行完成CONTRUCTOR，REACT已经帮我们把传递的属性接收，并且挂载到实例上了）


		/*
		 * this.props: 属性集合
		 * this.refs: REF集合（非受控组件中用到）
		 * this.content: 上下文
		*/
		console.log(props)
		console.log(this.props)
	}
	componentWillMount(){
		// => 第一次渲染之前
	}
	render(){
		// this.props.com = '嘿嘿嘿';//Cannot add property com, object is not extensible 组件中的属性是调取组件的时候（创建类实例的时候）传递给组件的信息，而这部分信息是“只读的（只能获取不能修改）”=》组件的属性是只读的
		let { lx,con } = this.props;
		return <section>
			<h3>{ lx }</h3>
			<div>{ con }</div>
		</section>	
	}
}




/*
 * 总结：创建组件又两种方式”函数式“，”创建类式“
 * [函数式特点]
 	1.简单
 	2.能实现的功能也简单，只是简单的调取和返回JSX而已
 * [创建类式]
 	1.操作相对复杂一些，但是也可以实现更为复杂的业务功能
 	2.能够使用生命周期函数操作业务
 	3.函数式可以理解为静态组件（组件中的内容调取的时候已经固定了，很难再修改），而类这种方式，可以基于组件内部的状态来动态更新渲染的内容
 	4......
*/






ReactDOM.render(<div>
	哈哈哈
	<Sum />
	<Dialog lx={2} con={ 1 } />
	<Dialog lx={2} >
		<span>我是子元素</span>
	</Dialog>
</div>,document.getElementById('root'))

// let obj = {
// 	type: 'div',
// 	props: {
// 		children:{
// 			'哈哈哈',
// 			{
// 				type: Dialog,
// 				props:{
// 					lx: 2
// 				}
// 			}
// 		}
// 	}
// }