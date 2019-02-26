// ES6新语法
/*
- let / const
- 解构赋值
- “...” 拓展，剩余，展开运算符
- 箭头函数
- es6中的模板字符串

- promise （async / await）
- class(ES6创建类的)
- interator (for of循环 )
- Map / Set
- ...
*/

/*let / const 和es5中的VAR的区别
> let不存在变量提升机制（变量不允许在声明之前使用）
> let不允许重复声明
> 在全局作用域中基于let声明的变量不是window的一个属性，和他没有关系
> typeof 未被声明的变量 =》 不是undefined而是报错（暂时性死区）
> let会形成块级作用域（类似于私有作用域，大部分大括号都会形成块级作用域）
> ...
*/

/*
箭头函数与普通函数的区别
> 没有argument，但是可以通过...arg获取实参结合（结果是一个数组）
> 没有自己的this，箭头函数中的this是上下文中的this
*/



// ### 2.请说出你对“重排和重绘读写分离“的理解！
// 重排（回流） 重绘
/*> 思路
1.首先说出什么是重排和重绘
2.突出他们耗性能
3.突出自己写项目的时候重点注意了这些事情，以及自己的解决方案（说一下解决原理）*/
/*
浏览器渲染一个页面的时候是按照“先创建DOM树-》在加载CSS-》生成渲染树 RENDER TREE-》把渲染树交给浏览器（CPU）进行绘制”，如果后期我们修改了元素的样式（但是没有改变大小和位置），浏览器会把当前元素重新生成渲染树，然后重新渲染，这个机制是重绘，但是一旦元素的位置或者大小等发生改变，浏览器就要从DOM树重新计算渲染，这个机制是回流（重排），不论是重排还是重绘都非常的消耗性能。

在我的以前项目中，我特意的重视了这个问题，尽量减少操作DOM引发的回流和重绘，常用的解决方案
1.需要动态向页面追加元素的时候，基于文档碎片或者把需要的所有元素拼接成字符串，最后统一进行增加
2.读写分离：把统一样式放到一起执行，新版浏览器都有一个自己检测的机制，如果发现下面紧挨着的操作也是修改元素的样式，会把所有修改的事先存起来，直到遇到非修改样式的操作，会把存储的统一执行，引发一次回流和重绘

当前还有一些其他的办法，这些是最长注意的，我认为减少DOM的回流重绘是非常重要的性能优化手段之一。*/


var a = 'abc' + 123+456;
alert(a) // 'abc123456';

var b = '456' - '123';
alert(b) // '333'

var c = 1,
	d = '1';
	var f = c>d?(c<d?c:d):(c==d?c:d);
alert(f) // '1'


// ## 用户昵称规定只能是“数字，大小写字母”组成，而且不能少于2未，也不能超过20位，写一个正则
let reg = /^[0-9a-zA-Z]{2,20}$/;

// ### 谈谈你对面向对象的理解？
[JS本身就是面向对象编程的]
JS本身基于面向对象（OOP）编程思想开发出来的语言，我们学习JS就是在学习JS中的类和实例，例如：
数组是Array的实例，对象是Object的实例，函数是Function的实例...,在这些内置类的原型商有很多公共的属性和方法，这些方法可以被实例调用，我们学习JS就是学习这些方法

[面向对象真实项目应用]
平常的业务逻辑开发，我没有可以使用类的方法类的方式来做，只有在一些组件或者插件封装的时候才会有，基于构造函数和原型链使用类和实例完成，例如，TAB页卡等，就是这样处理的（我之前看了一些类库和插件的源码，也都是基于面向对象封装的）

[面向对象中的一些语法和特点]
所谓面向对象是基于class和function创建一个类，执行的时候new执行创建一个实例，这样实例就可以调取类商提供的方法，想要基于面向对象进行插件封装，必须掌握类的继承，封装和多态，封装就是提取公共的方法，js中没有严格意义的多态，不能进行方法的重写，常用的继承方式有很多，例如：原型继承，call继承，寄生组合式继承，es6的继承等，有些方式会存在一些问题，我项目中后来都是基于class中的extend实现继承的



// 
var point = {
	x: 10,
	y: 20,
	moveTo: function(x,y){
		//=> this:point
		//=>x:100 y:200
		var moveX = function(x){ 

			// this: window
			this.x = x 
		}
		var moveY = function(y){ 
			// this: window
			this.y = y 
		}
		moveX(x)
		moveY(y)
	}
}
point.moveTo(100,200);
console.log(point.x,point.y)  // 10, 20



var point = {
	x: 10,
	y: 20,
	moveTo: function(x,y){
		//=> this:point
		//=>x:100 y:200
		/*
			var moveX = function(x){ 

				// this: point
				this.x = x 
			}
			var moveY = function(y){ 
				// this: point
				this.y = y 
			}
			moveX.call(this,x)
			moveY.call(this.y)
		*/

		/*
			var moveX = ()=>{ 

				// this: point
				this.x = x 
			}
			var moveY = ()=>{ 
				// this: point
				this.y = y 
			}
			moveX(this,x)
			moveY(this.y)
		*/

		/*
			var that = this;
			var moveX = function(x){ 

				// this: point
				that.x = x 
			}
			var moveY = function(y){ 
				// this: point
				that.y = y 
			}
			moveX(this,x)
			moveY(this.y)
		*/

	}
}
point.moveTo(100,200);
console.log(point.x,point.y)  // 100, 200



/* 
 * JS中的THIS汇总
 	THIS：当前方法执行的主体（谁执行的这个方法，那么THIS就是谁，所以THIS和当前方法在哪创建或者在哪执行的都没有必然的关系）	
 */ 
// 1.给当前元素的某个事件绑定方法，方法中的THIS都是当前操作的元素本身
	docuemntbody.onclick = function(){
	 	// this=> body
	}

// 2.函数执行，看函数前面是否有点，有的话，点前面是谁THIS就是谁，没有点，THIS是window（在js严格模式下，没有点THIS是undefined）
	let fn = function(){
		console.log(this);
	};
	let obj = {
		name: '哈哈哈',
		fn: fn
	}
	fn(); // this： window
	obj.fn(); // this: obj


// 3.构造函数执行，方法中的this一般都是当前类的实例
	let Fn = function(){
		this.x = 100;  //this: f
	}
	let f = new Fn;

// 4.箭头函数中没有自己的this，this是上下文的this
	let obj = {
		fn: function(){
			// this:obj
			setTimeout(()=>{
				//this: obj
			},1000)
		}
	}
	obj.fn();

// 5.在小括号表达式中，会影响this的指向
	let obj = {
		fn: function(){

		}
	}
	obj.fn();  	    //this: obj
	;(12,obj.fn)() //this: windiow

// 6.使用call/apply/bind可以改变this指向
	fn.call(obj) // this:obj
	fn.call(12)  // this: 12
	fn.call();   // this:window(非严格模式下call/apply/bind第一个参数不写或者写null和undefined，this都是window，严格模式下写谁this就是谁，不写是undefiend)