/*
 * NODE内置模块FS： 实现I/O的操作
 * fs.access 
 * fs.readdir
 * fs.mkdir / fs.mkdirSync 创建文件夹，有Sync的是同步创建（只有文件夹创建完成才能做其他的事情），想要实现无阻塞I/O操作，我们一般都使用异步操作完后曾要处理的事情
*/ 
let fs = require('fs');
