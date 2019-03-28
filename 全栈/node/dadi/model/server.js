var http = require('http');
var fs = require('fs');
var path = require('path');  //node有自带的模块
var url = require('url')

var mimeModel = require('./getminefromfile');

http.createServer(function(req,res){

	// console.log(path.extname('index.html'))
	//http://localhost:8080/news.html   //news.html
	//http://localhost:8080/index.html  //index.html

	


	console.log(pathname)

	

}).listen(8000)