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


/*
 * 回调函数的问题
 * 1. 无法捕获错误 try catch return
 * 2. 不能return
 * 3. 回调地域
*/

function read(filename){
	fs.readFile(filename,'utf8',function(err,data){
		if(err){
			console.log(err);
		}else{
			console.log(data)
		}
	})
}
// 错误出现时,try已经完事了
// try{
// 	read('./1.txt')
// }catch(e){
// 	consoel.log("e",e)
// }

// read('./1.txt');
// console.log(2);






/*
 * 当你访问服务器的时候,比如要请求一个html页面,比如是用户列表, 服务器一方面会读取模板文件,可能是ejs pug dade handlebar,另一方面还要去读取数据(可能会放在文件里,也可能放在数据库里),他们都很慢,所以都是异步的.这种恶魔金字塔有以下问题
 	1. 非常难看
 	2. 非常难于维护
 	3. 效率比较,因为他们是串行的

*/

/*
	fs.readFile('./template.txt','utf8',function(err,template){
		fs.readFile('./data.txt','utf8',function(err,data){
			console.log(template,data)
		})
	})
*/

// 如何解决这个回调嵌套的问题
	//1. 通过事件发布定阅来事件

// 这是node核心模块中的一个类,通过它可以创建时间发射器的实例,里面有两个核心方法,一个叫on emit,on表示注册监听,emit 表示发射事件
/*
let EventEmitter = require('events');
let eve = new EventEmitter();

// 这个html是存放最终的数据
let html = {};
// 监听数据获取成功事件,当事件发生之后调用回调函数
eve.on('ready',function(key,value){
	html[key] = value;
	if(Object.keys(html).length == 2){
		console.log(html);
	}
})
fs.readFile('./template.txt','utf8',function(err,template){
	// 1.事件名 2参数往后是传递给回调函数的参数
	eve.emit('ready','template',template)
})

fs.readFile('./data.txt','utf8',function(err,data){
	eve.emit('ready','data',data)
})
*/








// 通过一个哨兵函数来处理
// let html = {};
// function done(){
// 	html[key] = value;
// 	if(Object.keys(html).length == 2){
// 		console.log(html)
// 	}
// }

function render(length,cb){
	let html = {};
	console.log(length,html)
	return function(key,value){
		html[key] = value;
		if(Object.keys(html).length == length){
			cb(html)
		}
	}
}
let done = render(2,function(html){
	console.log(11);
	console.log(html)
})

fs.readFile('./template.txt','utf8',function(err,template){
	console.log(template)
	done('template',template)
})

fs.readFile('./data.txt','utf8',function(err,data){
	console.log(data)
	done('data',data)
})







