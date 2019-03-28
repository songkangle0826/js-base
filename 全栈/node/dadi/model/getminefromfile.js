exports.getMine = function(fs,extname){ /*获取后缀名的方法*/
	console.log('1')
	/*
		异步有问题---拿不到数据
		fs.readFile('./mine.json',function(err,data){
			if(err){
				console.log("文件不存在")
			}
			console.log(data.toString())

			var Mines = JSON.parse(data.toString())

			console.log(Mines[extname])
			return Mines[extname] || 'text/html'
		})
	*/

	/* 把读取数据改成同步 */
	var data = fs.readFileSync('./mine.json');
	var Mines = JSON.parse(data.toString())  /*toString表示转换城字符串 JSON.parse把json字符串转换为对象*/
	return Mines[extname] || 'text/html'

}