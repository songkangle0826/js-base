/*
 * 比如我现在要读取一个文件,异步读取
*/

let fs = require('fs');

/*
 * 回调函数第一个参数是error对象
*/
// fs.readFile('./1.txt','utf8',function(err,data){
// 	if(err){
// 		console.log(err);
// 	}else{
// 		console.log(data)
// 	}
// })