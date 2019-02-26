// 1.盒子模型13个属性
/*
 * 操作DOM的属性和方法
 	【获取元素或者元素集合】
 		getElementById
 			-> 上下文只能是document（只有document这个实例的原型链上才能找到这个方法，其他实例都找不到）
 			-> ID重复获取第一个元素
 			-> IE6-IE7中会把表单元素的name当作id使用
 		getElementsByTagName
 			-> 获取当前上下文中，所以子子孙孙中标签叫做xxx的元素
 		getElementsByClassName
 			-> IE6-8不兼容
 		getElementsByName
 			-> 在IE浏览器中只对表单元素的name起作用
 			-> 上下文也只能是document
 		querySelector
 		querySelectorAll
 			-> 不兼容IE-8
 			-> 没有DOM映射
 		document.documentElement
 		document.body
 		document.head
 	【描述节点和节点之间的属性】
 			nodeType  nodeName nodeValue
 		元素节点	1 大写标签名	  null
 		文本节点 3 #text		  文本内容
 		注释节点	8 #comment	  注释内容
 		文档节点 9 #document   null

 	childNodes: 所以子节点
 	children： 所以元素子节点（IE6-8会把注释当作元素节点
 	parentNode
 	perviousSibling / perviousElementSibling
 	nextSibling
 	firstChild
 	lastChild

 	【动态操作DOM】
 		createElement
 		createDocumentFragment
 		appendChild
 		insertBefore
 		cloneNode（true/false）
 		removeChild
 		set/get/removeAttribute

 	【散】
 		xxx.style.xxx = xxx  设置行内样式
 		->  xxx.style.xxx    获取行内样式

 		xxx.className = 'xxx';

 		xxx.onclick = function...

*/ 


/*
 * js盒子木星属性
 	=》 在js中通过相关的属性可以获取（设置）元素的样式信息，这些属性就是盒子模型属性(基本上都是有关样式)
 		client
			top
			left
			width
			height
 		offset
			top
			left
			width
			height
			parent
 		scroll
 			top
			left
			width
			height
*/ 