// 1
console.log(a)
var a = 12;
function fn(){
	console.log(a);
	var a = 13;
}
fn();
console.log(a);     

// 答案 B
/*
A: undefined 12 13
B: undefined undefined 12
C: undefined undefined 13
D: 有程序报错
*/

// 2
console.log(a)
var a = 12;
function fn(){
	console.log(a);  //只要var过的，向上级作用域查找
	a = 13;
}
fn();
console.log(a)

// 答案 A
/*
A: undefined 12 13
B: undefined undefined 12
C: undefined undefined 13
D: 有程序报错
*/


// 3
console.log(a)
a = 12;
function fn(){
	console.log(a);  //只要var过的，向上级查找
	a = 13;
}
fn();
console.log(a)

// 答案 D
/*
A: undefined 12 13
B: undefined undefined 12
C: undefined undefined 13
D: 有程序报错
*/


// 4
var foo = 1;
function bar(){
	if(!foo){
		var foo = 10;
	}
	console.log(foo)
}
bar();


// 答案  B
/*
A: 1
B: 10
C: undefined
D: 有程序报错
*/



// 4

/*  解析
 * 变量提升
 *    	var foo;
 		bar = aaafff000; 
 *
*/
var foo = 1;
function bar(){
	/*
      形参赋值： 无
      变量提升
      	var foo; (不管条件是否成立，都要进行变量提升，新浏览器中对于判断题中的函数只是提前说明)
	*/ 
	if(!foo){	//=> !undefined => TRUE
		var foo = 10;
	}
	console.log(foo)  //=>10
}
bar();
 
// 答案  B
/*
A: 1
B: 10
C: undefined
D: 有程序报错
*/

// 5
var n = 0;
function a(){
	var n = 10;
	function b(){
		n++;
		console.log(n);
	}
	b();
	return b;
}
var c = a();
c();
console.log(n)


// 答案  C
/*
A: 1  1  1
B: 11 11 0
C: 11 12 0
D: 11 12 12
*/



// 6
var a = 10,b=11,c=12;
function test(a){
	a = 1;
	var b = 2;
	c = 3;
}
test(10)
console.log(a)  //10
console.log(b)  //11
console.log(c)  //3

// 答案  D
/*
A: 1  11 3
B: 10 11 12
C: 1  2  3
D: 10 11 3
*/


// 7

/*
 * 变量提升
 *  var a; 不管条件是否成立都要进行变量提升，在全局作用域下声明的变量，也相当于给window设置了一个对象的属性，而且两者之间建立映射机制《--》window.a = undefined
 *
 * in： 检测一个属性是否属于这个对象（不管是私有属性还是公有属性，只要有这个属性结果就为TRUE）
 * hasOwnProperty： 检测某一个属性是否为对象的私有属性（只有这个属性是私有的才可以）
*/

if(!(("a") in window)){
	var a = 1;
}
console.log(a);

// 答案  B
/*
A: 1
B: undefined
C: 报错
D: 以上答案都不对
*/ 



// 8

/*
 * 变量提升
 	var a;
 	b = aaafff000;
*/
var a = 4;
function b(x,y,a){
	/*
     *	形参赋值：x=1；y=2;a=3

     * arguments: 函数内置的实参集合，不管是否设置形参，传递的实参值都在这个几个中存在
     	{
			0：1
			1：2
			2：3
			length:3
			callee: 函数本身
     	}
		在js非严格模式下，函数中的形参变量和Arguments存在映射机制（映射:相互之间影响）
		具体来说：第一个形参变量修改为100，那么ARG[0]的值也跟着修改为100
		
	*/
	console.log(a)      //3
	arguments[2] = 10;  //把传递的第三个实参值修改为10，此时第三个形参变量也会收到影响跟着变为10
	console.log(a)		// 10
}
a = b(1,2,3);  //=>a=b的执行结果 =》a=undefined； b函数中并没有编写return，所以默认函数返回为undefined
console.log(a);

// 答案  D
/*
A: 3 3 4
B: 3 10 4
C: 3 10 10
D: 3 10 undefined
*/ 


// argument的面试题 

// js非严格模式下
function fn(x,y,z){
	// arguments和形参赋值映射建立在函数执行后形参赋值的一瞬间，此时能建立映射机制的建立映射机制，不能建立映射机制的以后不管怎么做，都不能在建立了
	/*
	 * 形参
	 	x = 10
	 	y = undefined y也是私有变量，不是没有赋值，而是赋值为undefined
	 	z = undefined
	 * Arg
	 	{
			0： 10
			length： 1
	 	}
	 *
	 * ARG和形参之间的映射是以ARG的索引为基础完成的，在ARG中有这个索引，浏览器会完成和对应形参变量中的映射机制搭建，如果形参比ARG中的个数多哦，那么多出来的形参是无法和ARG中对应的索引建立关联的
	*/
	var arg = arguments;
	arg[0] = 100;
	console.log(x)  //100
	y = 200;
	console.log(arg[1]) //undefined、
	arg[1] = 300;
	/*
		此时的arg
		* Arg
	 	{
			0： 10,
			1: 300
			length： 2
	 	}
	*/
	console.log(y);  //undefined
	y = 400;
	console.log(arg[1]);  //undefined
}
fn(10)


/*

// js严格模式
//>在当前作用域的”第一行“添加”use strict“即可。这样在当前作用域中就开启了js的严格模式
"use strict" // 相当于这个js都开启了严格模式（只对当前这个JS文件中代码生效，下一个js文件需要开启严格模式，第一行还需要在编写），真实项目中，我们一般都会把所有的JS文件合并压缩为一个导入页面中
function fn(){
	// "use strict"  //=>只在当前作用域中使用严格模式

}

*/


// 9
/*
  * 变量提升
  	var foo；
*/

/*
// =》 逻辑与&& 和 逻辑或 ||
1.条件判断中
2.在赋值操作中也会用到，
	var a = 1 || 2; //首先验证1是真假，如果1赋值给a，如果为假，把2赋值给a。
	var b = 1 && 2; //"A&&B":先验证A的真假，为真结果是B，为假结果是A

	1.||
	function fn(x,y){
		if(x === undefined){
			x = 0
		}
		if(typeof x === undefined){
			x = 0
		}
		x = X || 0
	}
	fn()

	2.&&
	function fn(callback){
		//=>如果传递的值是个函数，我们才让其执行
		if(typeof callback === 'undefined'){
			callback()
		}

		callback && callback() //上面if判断的简写班，不严谨，默认
	}
	fn(function(){})  //


	3.//逻辑与和逻辑或的混合模式
	// 优先级： 逻辑与的优先级高级逻辑或
	0 || 1 && 2 || 0 || 3 && 1   //2

	4. 逻辑或的实战应用：形参赋值默认值（初始形参）
		在ES6新语法规范中可以直接给形参设置默认值
		function fn(x=0){
			//形参X没有传递值，默认值等于0，一旦传值，不管传递的是啥，都是按照传递的值处理的
		}	
		fn(undefined) //=》0 传递undefined，浏览器是按照没有传递值处理的  

*/


var foo = 'hello';
(function (foo){
	/*
	 * 形参赋值： foo = 'hello'
	 * 变量赋值： var foo; (这一步省略:因为在私有作用域中已经有这个foo这个变量了)
	*/
	console.log(foo)       //hello
	var foo = foo || 'world'   // hello || world
	console.log(foo)	  //hello
})(foo)  //=> 把全局的Foo的值作为实参传递给哦函数的形参= 'hello'
console.log(foo)		//hello


// 答案  
/*
A: hello hello hello
B: undefined world hello
C: hello world world
D: 以上答案都不正确
*/












