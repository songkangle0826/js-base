/*
 * 当前函数执行，形成一个私有作用域A。A的上级作用域是谁，和他在哪执行的没有关系，和他在哪创建（定义）的有关系，在哪创建的，它的上级作用域就是谁
*/

/*var a = 12;
function fn(){
	console.log(a);
	// => arguments: 实参集合
	// => arguments.callee :函数本身FN
	// => argument.callee.caller 当前函数在哪里执行的，CALLER就是谁（记录的是它执行的宿主环境），在全局下执行CALLER的结果是NULL

	console.log(arguments.callee)
}
function sum(){
	var a = 120;
	fn();   // 12
}
sum();*/


var n = 10;
function fn(){
	var n = 20;
	function f(){
		n++;
		console.log(n)  //21 
	}
	f();
	return f
}
var x = fn();
x();             //22
x();             //23
console.log(n)    //10


