// utils.css(outer,{
// 	width: 400,
// 	height: 300,
// 	color: 'red'
// })




utils.css(outer,{
	position: 'relative'
})


console.log(center.offsetParent) 	 //inner
console.log(inner.offsetParent) 	//outer
console.log(outer.offsetParent) 	//body


utils.css(inner,{
	position: 'absolute'
})
console.log(center.offsetParent) 	 //inner
console.log(inner.offsetParent) 	//outer
console.log(outer.offsetParent) 	//body
console.log(document.body.offsetParent);  //null



// =》 不管你父级参照物是谁，我都要获取当前元素距离BODY的偏移量（左偏/上偏）
	//1.不能修改样式既定的样式（不能基于POSITION方式改它的参照物）




console.log(outer.offsetLeft,11) 

