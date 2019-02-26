/*
 * mouseenter 和 mouseover
 * 1.over属于滑过（覆盖）事件，从父元素进入到子元素，属于离开了父元素，会触发父元素的out，触发了元素的over
 	enter属于进入，从父元素进入子元素，并不算离开父元素，不会触发父元素的leave，触发了子元素的enter
 	2.enter和leave阻止了事件的冒泡传播，而over和pout还存在冒泡传播的

 	所以对于父元素嵌套子元素这种情况，使用over会发生很多不愿意的事情，此时我们使用enter会更加简单，操作方法，所以真实项目中enter使用的回比over多
*/ 


// inner.onmouseover = function(){
// 	console.log('inner onmouseover')
// }
// outer.onmouseover = function(){
// 	console.log('outer onmouseover')
// }
// inner.onmouseout = function(){
// 	console.log('inner onmouseout')
// }
// outer.onmouseover = function(){
// 	console.log('outer onmouseout')
// }


inner.onmouseenter = function(){
	console.log('inner onmouseenter')
}
outer.onmouseenter = function(){
	console.log('outer onmouseenter')
}
inner.onmouseleave = function(){
	console.log('inner onmouseleave')
}
outer.onmouseleave = function(){
	console.log('outer onmouseleave')
}