/*
	console.log(1)
	new Promise((resolve,reject)=>{
		// => new Promise的时候会立即吧excutor函数（也就是传递的回调函数）执行，所以Promise本身可以理解为同步的
		console.log(2);
		resolve(); //Promise内部机制，执行resolve会把之前基于then存放的方法执行
	}).then(()=>{ //执行完成excutor，紧接着执行then，执行then方法，会把传递的回调函数放到指定的容器中，等待出发执行（Promise内部机制）
		console.log(3)
	})
	console.log(4)
*/

console.log(1)
new Promise((resolve,reject)=>{
	console.log(2);
	resolve(); 
}).then(()=>{
	console.log(3)
})
console.log(4)