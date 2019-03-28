exports.statics = function(req,res,staticPath){
	var pathname = url.parse(req.url).pathname;

	console.log(pathname)

	if(pathname == '/'){
		pathname = '/index.html'
	}

	// 获取文件的后缀名
	var extname = path.extname(pathname)

	// 过滤请求
	if(pathname!='/favicon.ico'){
		

		// 文件操作 static下面的index.html
		fs.readFile('staticPath/'+pathname,function(err,data){
			if(err){
				//没有这个文件
				console.log('404')

				fs.readFile('staticPath/404.html',function(err,data404){

					if (err) { return }

					res.writeHead(200,{"Content-Type":"text/html;charset='utf-8'"})
					res.write(data404)
					res.end()  //结束响应
				})

				return
			}else{
				//有的话，返回这个文件
				//设置响应投
				var mine = mimeModel.getMine(fs,extname)  //获取文件类型
				res.writeHead(200,{"Content-Type":""+mine+";charset='utf-8'"})
				res.write(data)
				res.end()  //结束响应
			}



		})


	}
}