// ES7中新增加对Promise操作的新语法，async/await（使用await必须保证当前方法是基于async修饰的）
/*
	function AA(){
		return new Promise((resolve,reject)=>{
			setTimeout(()=>{
				Math.random()<0.5?reject(100):resolve(200)
			},0)
		})
	}
	fn()
	console.log(1)

	async function fn(){
		console.log(2)
		let res = await AA();  //先把AA执行。等待AA中的PROMISE完成（不论成功和失败），都会把最后的处理结果获取到赋值给RES，拿到后在执行后面的代码（有人说：AWAIT把是异步的操作同步化）
		console.log(res)
		console.log(3)
	}
	console.log(4)
	// fn()
*/


	function AA(){
		console.log(1)
		return new Promise((resolve,reject)=>{
			setTimeout(()=>{
				resolve(200)
			},0)
		})
	}
	async function fn(){
		console.log(2)
		let res = await AA();
		/*
   			1.先把AA执行，返回一个Promise实例
   			2.它会暂时跳出当前正在执行的函数（Fn），也就是await后面的代码暂时先不执行（把后面的代码从主栈中移除，放到等待区中）
   			3.主栈暂时空闲
   			4.当主栈中的其他任务执行完成（主栈空闲），并且AA中的PROMISE也已经计算完成最后的结果，再把之前的第二步移到等待区的内容，重新那回到主栈中执行
		*/
		console.log(3)
	}
	fn()
	console.log(4)
	// while(true){

	// }
	// => 2 1 4 3 AWAIT并不是同步
	


// 面试题
async function async1(){
	console.log('async1 start')
	await async2(); //先执行async2(),在等待
	console.log('async1 end')
}
async function async2(){
	console.log('async2')
}
console.log('script start')
setTimeout(()=>{
	console.log('setTimeout')
},0)
async1();
new Promise(function(resolve){
	console.log('promise1')
	resolve();
}).then(function(){
	console.log('promise2')
})
console.log('script end')

// script start 
// async1 start
// async2
// promise1
// script end
// async1 end 或者promise2（根据不同的V8版本，是不一样的） 
// setTimeout