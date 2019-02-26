// let Promise = require('./6-promise');

let p1 = new Promise((resolve,reject)=>{
	setTimeout(()=>{
		// 定时器中不能抛异常
		console.log(Math.random())
		Math.random()<0.5?resolve(100):reject(-100)
	})
	// throw new Error('error')
})

let p2 = p1.then((result)=>{
	console.log(1,result)
	return result + 100
},(reason)=>{
	console.log(2,reason)
	return reason + 100
})

let p3 = p2.then((result)=>{
	console.log(p1===p2)  //false 执行THEN返回的是一个新的PROMISE实例
	console.log(result)
},(reason)=>{
	console.log(reason)
	
})

console.log(3)