var http = require('http');
var fs = require('fs');
var path = require('path');  //node有自带的模块
var url = require('url')
var ejs = require('ejs')

http.createServer(function(req,res){

	var pathname = url.parse(req.url).pathname;

	res.writeHead(200,{"Content-Type":"text/html;charset='utf-8'"})


	if (pathname == '/login') {
		var data = '你好，我是'
		var list = [
			'111',
			'222',
			'3333'
		]
		// 把数据渲染到模板上
		ejs.renderFile('view/login.ejs',{
			msg: data,
			list: list
		},function(err,data){
			res.end(data)
		})
		// res.end('login')
	} else if(pathname == '/register'){
		var data = '注册把是'
		ejs.renderFile('view/register.ejs',{
			msg: data,
		},function(err,data){
			res.end(data)
		})
	} else{
		res.end('index')
	}

	

}).listen(8000)