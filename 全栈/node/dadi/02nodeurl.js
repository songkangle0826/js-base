// 1.引入http模块和url模块
var http = require('http'),
	url = require('url');
http.createServer(function(req,res){

	//输入http://localhost:8001:news?aid=123 拿到aid

	console.log(req.url)

	res.writeHead(200,{"Content-Type":"text/html;charset='utf-8'"})
	
	if(req.url != '/favicon.ico'){
		console.log(req.url);
		var result = url.parse(req.url,true); //第一个参数是地址，第二个参数式true的话表示把get传值转化成对象
		console.log(result.query.aid)
	}



	res.write('你好，node111');
	res.end(); /* 结束响应 */

}).listen(8000)