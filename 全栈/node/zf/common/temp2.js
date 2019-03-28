let a = 1;
	fn = b =>{
		return a / b
	}
var temp1 = require('./temp1'); //=> ./特意指定是当前目录中的某个模块（.js可以省略）
	//require导入的时候：首先把TEMP1模块的代码自上而下执行，把exports对应的堆内存导入进来，所以接受的结果是一个对象（require是一个同步操作：只有把导入的模块执行完成，才可以获取值，然后继续执行本模块下面的代码）
console.log(3)

console.log(temp1.fn(10))

temp1 = require('./temp1'); //=> 第二次没有把TEMP1代码执行，因为第一次