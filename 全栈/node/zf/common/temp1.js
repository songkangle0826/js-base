let a = 12;
	fn = b =>{
		return a * b
	}
console.log(1);

setTimeout(()=>{
	console.log(1.5)
},1000);

// exports = {}; //是无法导出内容的： 默认时module.exports是同一个堆内存，但是这种操作让exports指向新的堆内存，而module.exports不受影响,(require导入的是module.exports对应的堆内存，而不是exports的)

exports.fn = fn; //=> 把当前模块私有的函数放到exports导出对象中（赋值给他的某一个属性），这样再其他模块中，可以基于REQUIRE导入进来使用
console.log(2)

module.exports = { //=>重定向到自己的堆内存，用来实现导出
	fn1: fn1
}
module.exports.fn2 = fn2;	//=>向新的堆内存中加入导入的内容
exports.fn3 = 100; // 无法导出。此时exports和module.exports已经不是一个堆内存了

