import React from 'react';  //每一个组件都需要导入REACT，因为需要基于他的CREATE-ELEMENT把JSX进行解析渲染

/*
 * 函数式声明组件
 *  1.函数返回解果式一个新的JSX（也就是当前组件的JSX结构）
 *  2.PROPS变量存储的值是一个对象，包含了调取组件时候传递的属性值,(不传递是一个空对象)
*/

/*
知识点：
CREATE-ELEMENT在处理的时候，遇到一个组件，返回的对象中：TYPE就不再是字符串标签名了，而是一个函数（类），但是属性还是存在PROPS中
{
	type：Dialog
	props:{
		lx:1,
		con: 'xxx',
		children:一个值或者一个数组
	}
}
> RENDER渲染的收获，我们需要做处理，首先判断TYPE的类型，如果是字符串，就创建一个标签，如果函数或者类，就创建一个元素标签，把PROPS中的每一项（包含children）传递给函数
》 在执行函数的时候，把函数中terurn的JSX转换为新的对象（通过CREATE-ELEMENT），把这个对象返回：紧接着RENDER按照以往的渲染方式，创建DOM元素，插入到指定的容器中即可
*/



export default function Dialog(props){
	let { con, lx=0, children ,style={}} = props;
	console.log(props)
	let title = lx===0?'系统提示':'系统警告'

	// => children: 可能有可能没有，可能只是一个值，也可能是一个数组，可能每一项是一个字符串，也可能代表一个对象等（都代表双闭合 组件的子元素）
	return <section style={style}>
		<h2>{ title }</h2>
		<div>
			{ con }
		</div>
		{/* 把属性中传递的子元素放到组件中指定的位置 */}
		{/*  children  */}
		{/* 也可以基于REACT中提供的专门遍历CHILDREN的方法来完成遍历操作 */}
		{
			React.Children.map(children,item => item)
		}
	</section>
}