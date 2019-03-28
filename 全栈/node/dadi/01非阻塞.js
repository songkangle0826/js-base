var fs = require('fs');
var events = require('events')

// console.log('1');

// // 非阻塞i/o
// fs.readFile('fs.js',function(err,data){
// 	console.log(data)
// 	console.log('2')
// })

// console.log('3')


/*
function getMime(){

	fs.readFile('fs.js',function(err,data){
		console.log(data.toString)
		return data
	})
}

console.log(getMime());  //有问题，拿不到值
*/

// 1 处理异步
/*	回调
	function getMime(callback){

		fs.readFile('fs.js',function(err,data){
			console.log(data.toString())
			callback(data)
		})
	}
	getMime(function(result){
		console.log(result)
	})
*/

// 2.nodejs events模块处理异步
// nodejs有多个内置的事件，我们可以通过引入events模块，并通过实例化EventEmitter类来绑定和监听事件
/*var events = require('events')
var EventEmitter = new events.EventEmitter();
// 广播 和接收广播
EventEmitter.on('to_mime',function(data){
	// console.log("接收到了这个广播")
	console.log(data)
})
EventEmitter.on('to_parent',function(data){
	// console.log("接收到了这个广播")
	console.log(data)
	EventEmitter.emit("to_mime","给mime发送的数据")
})
setTimeout(function(){
	console.log('开始广播')
	// 广播to_parent事件
	EventEmitter.emit("to_parent","发送的数据")
},1000)
*/


var EventEmitter = new events.EventEmitter();

function getMime(callback){
	fs.readFile('fs.js',function(err,data){
		console.log(data.toString())
		EventEmitter.emit("data",data)
	})
}
getMime() //执行方法

//监听广播事件
EventEmitter.on('data',function(mime){
	console.log(mime.toString())
})