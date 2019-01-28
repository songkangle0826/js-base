import React from 'react';
import ReactDOM from 'react-dom';//=>从React-DOM中导入一个REACTDOM，逗号后面的内容是吧ReactDOM这个对象进行解构赋值 <=> import { render } from 'react-dom'


import { createElement,render } from  './3-self-jsx.js'

/*
 * JSX渲染机制
 * 1.基于BABEL中的语法解析模块（BABEL-PRESET-REACT）把JSX语法编译为React.createElement(...)解构
	React.createElement(
		'h1',
		{ id: 'title',
		  className: 'title',
		  style: styleObj 
		},
		'\u54C8\u54C8\u54C8\u54C8\u54C8'=>"哈哈哈哈哈"
	);
 * 2.执行React.createElement(type,props,children)
 	type: 'h1',
 	props:{
		id: "title", 
		className: "title", 
		style: {color:red}, 
		children: "哈哈哈哈哈" //元素中的内容
 	}
 	ref: null,
 	key: null,
 	...
 	__proto__ :Object.prototype
 * 3.ReactDOM.render(JSX语法最后生成的对象，容器)，基于RENDER方法把生成的对象动态创建为DOM元素，插入到知道容器中
*/



// let styleObj = {color:'red'}
// render(<h1 id='title' 
// 	className='title' 
// 	style={styleObj}>
// 	哈哈哈哈哈
// </h1>,document.getElementById("root"))

// console.log(React.createElement(
// 		'h1',
// 		{ id: 'title',
// 		  className: 'title',
// 		  style: styleObj 
// 		},
// 		'\u54C8\u54C8\u54C8\u54C8\u54C8'
// 	))
/*
	key: null
	props: {
		id: "title", 
		className: "title", 
		style: {…}, 
		children: "哈哈哈哈哈"
	}
	ref: null
	type: "h1"
	_owner: null
	_store: {validated: false}
	_self: null
	_source: null
*/


console.log(React.createElement(
	'div',
	null,
	React.createElement(Dialog, { con: '\u54C8\u54C8' }),
	React.createElement(
		Dialog,
		{ con: '\u563F\u563F\u563F', lx: 1 },
		React.createElement(
			'span',
			null,
			'111'
		)
	)
));



let objJSX = createElement(
  "div",
  { className: "box" },
  createElement(
    "h1",
    { className: "title" },
    "hhahah"
  ),
  createElement(
    "ul",
    null,
    createElement(
      "li",
      { key: 1 },
      "\u5217\u88681"
    ),
    createElement(
      "li",
      { key: 2 },
      "\u5217\u88682"
    )
  ),
  "\u672C\u6B21\u53EA\u662F\u4E00\u4E2A\u6D4B\u8BD5"
)

render(objJSX,document.getElementById("root"))