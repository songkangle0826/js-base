import React from 'react';
import ReactDOM from 'react-dom';

// 函数式声明组件
import Dialog from './component/Dialog'


/*
 * react组件
 * 不管是vue还是react，设计之初，都是希望我们按照“组件/模块管理”的方式来创建程序的，也就是把一个程序划分一个个的组件来单独处理。
 	[优势]
 		1.有助于多人协作开发
 		2.我们开发的组件可以被复用
 		...
 * react中创建组件有两种方式：
 	函数声明式组件
 	基于继承COMPONENT类来创建组件

 * SRC -> COMPONENT: 这个文件夹存放的就是组件
*/

/*
知识点: CREATE-ELEMENT在处理的时候，遇到一个组件，返回的对象中TYPE就不再是字符串标签名了，而是一个函数（类），但是属性还是存在PROPS中
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

ReactDOM.render(<div>
	{/*注释：JSX调取组件，只需要把组件当作一个标签调取使用即可（单闭合和双闭合都可以）*/}
	<Dialog con='哈哈' style={{color:'red'}}/>
	<Dialog con='嘿嘿嘿' lx={ 1 }>
		<span>111</span>
		<span>222</span>
	</Dialog>
</div>,document.getElementById('root'))