1.什么是NODE?
	基于v8引擎（谷歌浏览器的引擎）渲染JS的工具或者环境
	-> 安装NODE
	-> 把js代码放到NODE环境中执行

2.安装NODE
	https://nodejs.org/zh-cn/
	node安装完成后
		-> 当前电脑上自动安装了npm（NODE PAckage Manage）： 一个JS模块（所有封装好可以供其他人调取使用的都可以称之为模块或者包）管理的工具，基于npm可以安装下载js模块
		-> 它会生成一个node执行的命令（可以在DOS窗口或者终端命令执行）： node xxx.js

	node -v(version) 检测node版本
	npm -v 检测npm的版本（基于node I/O读写来完成的）

3.如何咋NODE中渲染和解析JS
	-> REPL模式(Read-Evaluate-Print-Loop，输入-求值-输出-循环)
	-> 直接基于NODE来执行JS文件
		1).在命令窗口执行（DOS窗口 & 终端窗口）
		2).WB中的Termainal中执行node命令

4.之所以把NODE作为后台编程语言，是因为：
	1).我们可以把NODE安装在服务器上
	2).我们可以把编写的JS代码放到服务器上，通过NODE来执行它（我们可以使用JS来操作服务器，换句话说，使用JS来实现服务器的一些操作=》其实说NODE是后台语言，想要表达的是JS是后台语言 “JS是一门全栈编程语言”）

5.NODE做后台的优势和特点
	传统后台语言：JAVA/PYTHON/GO/PHP/C#(.net)/...
	=> 单线程的
	=> 基于V8引擎渲染：快
	=> 异步无阻塞的I/O操作：I/O（INPUT/OUTINPUT） 对文件的读写
	=> event-drivent事件驱动： 类似于发布订阅或者回到函数

/*
 * JS运行在客户端浏览器 =》 “前端”
 	浏览器给js提供了很多全局的属性和方法，例如，window.xxx(setInterval,eval,alert,JSON...)
 * JS运行在服务器端的NODE中 =》 “后台”
 	NODE也给JS提供很多的内置属性和方法，例如：http，fs，url，path...等对象中都提供很多API供JS操作。
 * 
 * 前端（浏览器运行JS）是限制I/O操作的
 	input type='file' 这种算是I/O操作，但是需要用户手动选择（而且仅仅是一个读取不是写入）
 * 
 * NODE中运行JS是不需要限制I/O操作的
*/
6.在WB中开启NODE内置的代码提升
7.
