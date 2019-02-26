/*
 * 事件的传播机制
 *	冒泡传播： 触发当前元素的一个事件（点击事件）行为，不仅当前元素事件行为触发，而且其祖先元素的相关事件行为也会依次触发，这种机制就是”事件的冒泡传播机制“；
 *	

	1.捕获阶段： 点击INNER的时候，首先会从最外层开始向内查找（找到操作事件源），查找的目的是：构建出冒泡传播阶段需要传播的路线（查找的就是按照HTML层级结构找的）
	2.目标阶段： 把事件源的操作行为触发（如果绑定了方法，则把方法执行）
	3.冒泡传播： 把当前事件源的祖先元素，按照捕获阶段规划的路线，自内而外，把当前元素的祖先的相关事件行为依次触发（如果某一个祖先元素事件行为绑定了方法，则把方法执行，没绑定方法，行为触发了，什么都不做，继续向上椽笔即可）


*/ 

window.onclick = function(){
	console.log('window')
}
document.onclick = function(){
	console.log('document')
}
document.documentElement.onclick = function(){
	console.log('html')
}

let aa = null
document.body.onclick = function(ev){
	console.log('body',ev==aa)
}
outer.onclick = function(ev){
	console.log('outer',ev==aa)
}
inner.onclick = function(ev){
	ev = ev || window.event;

	aa = ev;
	ev.stopPropagation?ev.stopPropagation():ev.cancelBubble = true;
	console.log('inner',ev)  //ev传进来的事件对象
}


/*
 * xxx.click = function(){}  DOM0事件绑定，给元素的事件行为绑定方法，这些方法都是当前元素事件行为的冒泡阶段（或者目标阶段）执行的。
 * xxx.addEventListener('xxx',function(){},false)  //第三个参数false也是控制绑定的方法在事件传播的冒泡阶段（或者目标阶段）执行，只要第三个参数为true才代表让当前方法在事件传播的捕获触发执行（这种捕获阶段执行没有啥意义，项目中不用）
*/ 



/*
 * 不同浏览器对于最外层祖先元素的定义是不一样的
 		谷歌： window-》document-》html-》body....
 		IE高： window-》html->body
 		IE低： html-》body
*/ 


/*
 * 关于事件对象的一些理解
 	1.事件对象是用来存储当前本次操作的相关信息，和操作有关，和元素无必然关联
 	2.当我们基于鼠标或者键盘等操作的时候，浏览器会把本次操作的信息存储起来（标准浏览器存储到默认的内存中（自己找不到），IE低版本存储到window.event中了），存储的值是一个对象（堆内存）；操作肯定会触发元素的某个行为，把绑定的方法执行，此时标准浏览器会把之前存储的对象（准确来说是堆内存地址）当作实参传递给每一个执行的方法，所有操作一次，即使再多方法中都有EV，但是存储的值都是一个（本次操作信息的对象而已）
*/ 


let ary = [1,2,3,4,5];
for(var i = 0;i<=ary.length;i++){
	console.log(i)
}
for(var i = 0;i<ary.length;i++){
	console.log(i)
}