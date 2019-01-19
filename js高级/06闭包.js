/*
 * [闭包]
 * 》 函数执行形成一个私有的作用域，保护里面的私有变量不受外界的干扰，这种保护机制称之为”闭包“。
 * 
 * =》市面上的开发者认为的闭包：形成一个不销毁的私有作用域（私有栈内存）才是闭包
*/ 

/*
// > 闭包： 柯理化函数
function fn(){
	return function(){

	}
}
var f = fn();*/


/* 
// > 闭包：惰性函数
var utils = (function(){
	return {

	}
})(); */


// > 闭包项目实战应用
// ==> 真实项目为了保证js的性能（堆栈内存的性能优化），应该尽可能的减少闭包的使用（不销毁的堆栈内存是耗性能的）

// 1.闭包具有“保护”作用：保护私有变量不受外界的干扰
	//> 在真是项目中，尤其是团队协作开发的时候，应当尽可能的减少全局变量的使用，以防止相互之间的冲突（“全局变量的污染”），那么此时我们完全可以把自己这一部分内容封装到一个闭包中，让全局变量转换为私有变量
		/*
		(function (){
			var n = 12;
			function fn(){
			
			}
		})()
		*/
	//> 不仅如此，我们封装类库插件的时候，也会把自己的程序都存放到闭包中保护起来，防止和用户的程序冲突，但是我们有需要暴露一些方法给客户使用，这样我们如何处理呢？
	// 1.jQ这种方式：把需要暴露的方法抛到全局
		// (function (){
		// 	function JQuery(){
		// 		//..
		// 	}
		// 	window.JQuery = window.$ = JQuery;// =>把需要供外面使用的方法，通过WINDOWW设置属性的方式暴露出去
		// })
		// JQuery();
		// $();
	// 2.Zepto这种方式:基于RETURN把需要供外面使用的方法暴露出去
		// var Zepto = (function (){
		// 	// ...
		// 	// return{
				// xxx: function(){}
			// }
		// })()
		// Zepto.xxx()

// 2.闭包具有"保存"作用：形成不销毁的栈内存，把一些值保存下来，方便后面的调取使用
	





// ### 选项卡案例
/*for(var i = 0;i<tabList.length;i++){
	tabList[i].onclick = function () {
		changeTab(i);
		// => 执行方法：形成一个私有的栈内存，遇到变量i，i不是私有变量，向上一级作用域查找（上级作用域WINDOW）

		// => 所有的事件绑定都是异步编程（同步编程：一件一件事的做，当前这件事没有完成，下一个任务不能处理 / 异步编程：当前这件事没有彻底完成，不在等待，继续执行下面的任务），绑定事件后不需要等待执行，继续执行下一个循环任务，所有当我们单机执行方法的时候，循环早已经结束（让结束i等于循环最后的结果）
	}
}*/


/*// =》 解决方案自定义属性
for(var i = 0;i<tabList.length;i++){
	tabList[i].myIndex = i
	tabList[i].onclick = function () {
		changeTab(this.myIndex);
		// => THIS: 给当前元素的某个事件绑定方法，当事件触发，方法执行的时候，方法中的THIS是当前操作的元素对象
	}
}*/


// => 解决方案：闭包
for(var i = 0;i<tabList.length;i++){
	tabList[i].onclick = (function (n) {
		// => 让自执行函数执行，把执行的返回值（return）赋值给ONCLICK（绑定的是返回的小函数，点击的时候是小函数），自执行函数在给事件赋值的时候就已经执行了
		var i = n;
		return function(){
			changeTab(i)
		}
	})(0)
}
/*
 * i = 0; 第一次循环
 *   tabList[0].onclick = (function(n){
 		// 自执行函数执行形成一个私有作用域（不释放：返回的函数对应的堆地址被外面的事件占用了）
		
		// 1.形参赋值 n = 0;
		// 2.变量提升 var i;

		var i = n;
		return function(){ //点击的时候执行小函数
			changTab(i)
		}
 	  })(i)   // 把本次全局i（0）当作实参传递给n
 * 

 * 总结： 循环三次，形参三个不销毁的私有作用域（自执行函数执行）,每一个不销毁的栈内存中都存储了一个私有变量i，而这个值分别是每一次执行传递进来的是全局的i（也就是：第一个不销毁的作用域存储的是0，第二个是1，第二个是2）：当我们点击的时候，执行返回的是小函数，遇到变量I，向它自己的上级作用域查找，找到的i值分别是0/1/2，达到了我们想要的效果。
*/


// for(var i = 0;i<tabList.length;i++){
// 	(function (n){
// 		tabList[n].onclick = function(){
// 			changeTab(i);
// 		}
// 	})(i)
// } 


/*
 * 基于ES6来创建变量，是存在块级作用域的（类似于私有作用域）
 作用域：（栈内存）
 1.全局作用域
 2.私有作用域（函数执行）
 3.块级作用域（一般用大括号包起来的都是块级作用域），前提是ES6规范
*/


for (let i =0;i<tabList.length;i++){
	tabList[i].onclick = function(){
		changeTab(i)
	}
}
/* 机制let解析机制
{
	let i =0;
	tabList[i].onclick = function(){
		changeTab(i)
	}
}
{
	let i =1;
	tabList[i].onclick = function(){
		changeTab(i)
	}
}
{
	let i =2;
	tabList[i].onclick = function(){
		changeTab(i)
	}
}*/

let a = 100;
{
	let a = 100;
	{
		{
			console.log(a)
		}
		// let a = 200;		//保错
	}
}


for(let i=0;i<5;i++){
	//=>循环体中也是块级作用域，初始值设置的变量是当前本次块级作用域的变量（形成五个块级作用域，每个块级作用域中都有一个私有变量i，变量值就是每一个循环I的值）
}

// var obj = {}; //=>对象的大括号不是块级作用域
