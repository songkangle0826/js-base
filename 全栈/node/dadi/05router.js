var http = require('http');
var fs = require('fs');
var path = require('path');  //node有自带的模块
var url = require('url')


http.createServer(function(req,res){

	var pathname = url.parse(req.url).pathname;

	if (pathname == '/login') {
		res.end('login')
	} else if(pathname == '/register'){
		res.end('register')
	} else{
		res.end('index')
	}

	

}).listen(8000)