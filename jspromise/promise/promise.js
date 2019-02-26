/*
 * Promise A+
 * 有三种状态, pending(进行时)/ fulfilled(成功)/rejected(失败)
 * .then返回的是一个新的Promise
*/ 

new Promise((resolve,reject)=>{
	// => RESOLVE & REJECT:是自己任意执行的，但是一般情况下，大家都约定执行RESOLVE，失败执行REJECT 
	// => EXCUTOR函数（执行函数）种可以不管空异步操作（但是不管控异步没啥意义）
	resolve(100)
}).then((res)=>{
	// RESOVE执行会触发第一个函数执行
	consolelog(1)	// 再输出1
	return 1000;  //会把这个值传递给下一个方法，如果返回的是一个新的Promise实例，则等到Promise处理完成，把处理完成的结果传递给下一个THEN
},(reeson)=>{
	// REJECT执行会触发第二个回调函数执行
	console.log(2)
}).then(result=>{

},result=>{ //需要保证执行THEN方法返回的依然是PROMISE实例，这样才可以实现链式调用
	// 上一个THEN种管控的两个方法，只要任何一个执行不报错，都会执行这个THEN中的第一个方法；如果执行报错，会执行此THEN中的第二个回调函数
}).catch(reason=>{
	// CATCH就相当于THEN(then,reason=>{})
});
console.log(3)		//先输出3


// => 等待所以的PROMISE都成功执行THEN，反之只要有一个失败就会执行CATCH
// all执行的结果也是返回一个Promise对象
Promise.all([Promise1,...]).then();