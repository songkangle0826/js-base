/*
 * 1.fs.stat
*/

var fs = require('fs');

/*
 * fs.stat()
 	stats.isDirectory()
 		如果 fs.Stats 对象描述文件系统目录，则返回 true。
	stats.isFile()
		如果 fs.Stats 对象描述常规文件，则返回 true
	stats.size
		文件的大小（以字节为单位）。
	stats.atime
		表明上次访问此文件的时间戳。
	stats.mtime
		表明上次修改此文件的时间戳。

*/
// fs.stat('index.js',function(err,stats){
// 	if(err){
// 		console.log(err);
// 		return false;
// 	}
// 	console.log("文件",stats.isFile());
// 	console.log("目录",stats.isDirectory())
// 	console.log("文件大小",stats.size)
// 	console.log("上次访问的事件",stats.atime)
// 	console.log("上次修改文件的",stats.mtime)
// })


/*
 * 2. fs.mkdir 创建目录
 * 接受参数
 	path		将创建的目录路径
 	mode        目录权限（读写权限），默认0777
 	callback	回调，传递异常参数err
*/

// fs.mkdir("css",function(err){
// 	if (err) {
// 		console.log(err)
// 		return false
// 	}
// 	console.log("创建目录成功")
// })


/*
 * fs.writeFile 创建写入文件
 	filename  文件名称
 	data      将要写入的内容，可以市字符串或buffer数据
	options   (object)  options数组对象，包含
		encoding string 可选值，默认utf8 ，当data为buffer时，该值应该围殴ignored
		flag	 string  默认值‘w’
		callback（function） 回调，传递一个异常参数err
*/

// fs.writeFile("t.txt","你好nodejs 22","utf8",function(err){
// 	if (err) {
// 		return false
// 	}
// 	console.log("写入成功")
// })


/*
 * 4. fs.appendFile()  追加文件
*/
// fs.appendFile("t1.text","这是写入的内容",function(err){
// 	if (err) {
// 		console.log(err)
// 		return false
// 	}
// 	console.log("写入成功")
// })


/*
 * fs.readFile() 读取文件
*/

// fs.readFile('t.txt',function(err,data){
// 	if (err) {
// 		console.log(err);
// 		return false
// 	}
// 	console.log(data)
// 	console.log(data.toString())
// })


/*
 * 6.fs.readdir 读取目录 把目录下面的文件和文件夹都获取到
*/
// fs.readdir('css',function(err,data){
// 	if(err){
// 		console.log(err)
// 		return false
// 	}
// 	console.log(data)
// })

/*
 *7. fs.rename 重命名
 	1.改名 2.剪切文件
*/
// fs.rename('css/index.html','css/index.css',function(err){
// 	if (err) {
// 		console.log(err)
// 	}
// 	console.log('修改名字成功')
// })

// fs.rename('css/index.css','css/style/basic.css',function(err){
// 	if(err){
// 		console.log(err)
// 		return false
// 	}
// 	console.log('剪切成功')
// })


/*
 * 8.fs.rmdir 删除目录 rmdir只能删除目录
*/
// fs.rmdir('rmdir',function(err){
// 	if (err) {
// 		console.log(err)
// 		return false
// 	}
// 	console.log("删除目录成功")
// })


/*
 * 9.fs.unlink 删除文件
*/
// fs.unlink('inden.html',function(err){
// 	if(err){
// 		console.log(err)
// 		return false
// 	}
// 	console.log('成功删除文件')
// })





// 1.判断服务器上有木有upload目录，没有创建这个目录，（图片上传）
// fs.stat('upload',function(err,stats){
// 	if(err){ /* 表示没有这个目录 */
// 		console.log(err)

// 		fs.mkdir("upload",function(err){
// 			if(err){
// 				console.log(err)
// 				return false
// 			}
// 		})

// 		return false
// 	}else{
// 		console.log("目录已经存在")
// 		console.log(stats.isDirectory());
// 	}
// })

// 2.找出css目录下所有的目录，然后打印出来
/*
var filesArr = [];
fs.readdir('css',function(err,files){
	if(err){
		console.log(err)
		return
	}else{ //判断是目录还是文件夹
		//遍历数组
		(function getFile(i){       //自执行函数
			if(i==files.length){
				console.log(filesArr);
				return false
			}
			// fs.stat执行是一个异步的过程，相当于for循环中的setTimeout
			fs.stat('css/'+files[i],function(err,stats){
				console.log(files[i])

				// files[i] 
				// console.log(stats,11)
				if(stats.isDirectory()){  //目录
					filesArr.push(files[i])  //保存数据
				}
				getFile(i+1)
			})
		})(0)

		// for(let i = 0;i<files.length;i++){
		// 	console.log(files)
		// 	fs.stat('css/'+files[i],function(err,stats){
		// 		console.log(files[i])
		// 		if(stats.isDirectory()){  //目录
		// 			filesArr.push(files[i])  //保存数据
		// 			console.log(filesArr,22)
		// 		}
		// 	})
		// 	console.log(filesArr,11)
		// }
		
	}
})
*/



// 打印3个33
// for(var i = 0;i<3;i++){
// 	setTimeout(function(){
// 		console.log(i)
// 	},100)
// }



/*
 * 文件流的方式读取文件
 * createReadStream
*/ 
/*
var readStream = fs.createReadStream('t1.text');
var str = '';  //保存数据

var count = 0
readStream.on('data',function(chunk){
	str+=chunk
	count++
})

//读取完成
readStream.on('end',function(chunk){
	console.log(str)
	console.log(count)
})

//读取失败
readStream.on('error',function(err){
	console.log(err)
})
*/


/*
 * createWriteStream 创建写入流
*/
/*
var data = "我说是数据路中的数组111\n"
//创建一个可以写入的流，写入到文件t1.text中
var writeStream = fs.createWriteStream('t1.text');

for(var i = 0;i<100;i++){
	writeStream.write(data,'utf8')
}


// 标记写入完成
writeStream.end()

writeStream.on('finish',function(){
	console.log('写入完成')
})

writeStream.on('error',function(){
	console.log('写入失败')
})
*/


/*
 * 管道流
*/
// 创建一个可读流
var readerStream = fs.createReadStream('t1.text');

// 创建一个可写流
var writerStream = fs.createWriteStream('t.txt');

// 管道读写操作
// 读取t1.txt中的内容，并将内容写入到t.txt中
readerStream.pipe(writerStream)
console.log("程序执行完毕")