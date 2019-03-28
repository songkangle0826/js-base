/*
 * async await
 * async 将一个函数变成Promise对象
 * await 后面跟一个promise对象,如果不是,默认将其变成resolve的promise值作为resolve的参数
 	- await的结果就是resolve或者reject的参数
 	- await异步执行完成之后再去执行后面的代码
*/ 
let f =async function fn(){
	throw new Error("sorry")
	return 1
}
console.log(f)
// f().then((res)=>{
// 	console.log(res)
// }).catch((e)=>{
// 	console.log(e)
// })

// 语法糖：将复杂语法变成简单的表示

let ff = async function f1(){
	let a = await new Promise((resolve,reject)=>{
		console.log(1)
		setTimeout(()=>{
			resolve(100)
		},1000)
		console.log(2)
		
		// reject("sorry")
	});
	console.log(a)
}
ff()