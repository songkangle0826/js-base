/*
 * 它让 JavaScript 可以开发后端程序，实现几乎其他后端语言实现的所有功能，可以与 PHP、JSP、Python、Ruby 等后端语言平起平坐
 *
 * NODEJS的优势
 	1.NodeJs 语法完全是 js 语法，只要你懂 JS 基础就可以学会 Nodejs 后端开发。 
 	2.NodeJs 超强的高并发能力。
	3.实现高性能服务器
	4.开发周期短、开发成本低、学习成本
*/

/*
 * 创建第一个实例 http
*/ 
// 1.引入http模块 
var http = require('http');
// 2.用http模块创建服务
	/*
		req获取url信息 （request）
		res 浏览器返回的响应信息 （response）
	*/
http.createServer(function(req,res){
	res.writeHead(200,{"Content-Type":"text/html;charset='utf-8'"})
	res.write('你好，node');
	res.end(); /* 结束响应 */

}).listen(8000)


/*
 * URL模块
*/