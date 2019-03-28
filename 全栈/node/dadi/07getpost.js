// get post

// 超文本传输协议（HTTP）的设计目的是保证客户端与服务器之间的通信

// 在客户端和服务器之间进行请求-响应，两种最常用的方法： get ，post

// GET-一般指从指定的资源请求数据（一般用于获取数据）
// POST-向指定的资源提交要被处理的数据（一般用于提交数据）

var http = require('http');
var fs = require('fs');
var path = require('path');
var url = require('url');
var ejs = require('ejs');

http.createServer(function(req,res){

	// 获取get还是post请求
	// console.log(req.method)

	var method = req.method;
	var pathname = url.parse(req.url).pathname;

	res.writeHead(200,{"Content-Type":"text/html;charset='utf-8'"})

	console.log(pathname)
	if (pathname == '/login') {
		ejs.renderFile('view/login.ejs',{
			msg: '111'
		},function(err,data){
			res.end(data)
		})
	} else if(pathname == '/doLogin'&& method=='POST'){
		// 执行
		//get获取数据
		// console.log(url.parse(req.url,true).query)

		var postStr = '';
		req.on('data',function(chunk){
			postStr+= chunk;
		})
		req.on('end',function(){
			console.log(postStr)
		})

		res.end("<script>alert('登录成功')</script>")


		
	} else{
		// res.end('index')
	}
}).listen(3000)
