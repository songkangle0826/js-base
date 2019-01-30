// 1.在严格模式下不支持使用“argument.callee“
// 2.在严格模式下ARGUMENTs和形参没有映射机制
// 3.在严格模式下，不允许给一个对象设置重复命名的{n:10，n：20}
// 4.在严格模式下，函数执行如果没有明确指定执行的主体（函数前面没有。），不像非严格下一样，统一交给window，而是让this指向undefined，代码没有执行主体。严格模式下，有执行主体this就指向谁，没有执行主体，this就是undefined

// => 高程三，最后严格模式和非严格模式汇总

~function(){
	function fn(x){
		argument[0] =100;
		console.log(x)
	}
	fn(10)


	var obj = {
		n: 10,
		n: 20
	};
	console.log(obj.n)	

	function fn(){
		console.log(this)  //=>window
	}
	fn()


}();



~function(){
	"use strict"
	function fn(x){
		argument[0] =100;
		console.log(x)  // =>10, 不存在映射机制
	}
	fn(10)

	var obj = {
		n: 10,
		n: 20
	};
	console.log(obj.n)

	function fn(){
		console.log(this)	// undefined 
	}
	fn()

}()