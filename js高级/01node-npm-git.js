// node的安装及配置环境变量
// 2.验证安装是否成功 node -v (--version)
// 3.npm -v

### NODE基础概念
1.node并不是一门语言，它是一个工具或者环境
	-基于V8引擎（webkit）渲染和解析js的
	-单线程
	-无阻塞I/O操作
	-事件驱动
	-...
	之所以把nod称之服务端语言，只是因为node给予JS操作服务器的能力，我们在服务器端安装node，只用js完成服务器需要处理的一些事情，最后把写好的js代码交给node环境运行即可
2.在node环境中把JS代码执行
	1）.REPL命令 (Read-Evaluate-Pring-Loop:输入-求值-输出-循环) 
	2）.基于node xxx.js 命令执行
	3）.基于WB这类编辑工具直接执行

基于node命令执行，我们需要先找到当前文件所在的文件夹，然后在这个目录下打开DOS窗口，在窗口中执行node xxx.js这样就相当于node环境下把js文件中的代码执行了

> 如何在当前文件目录下打开DOS窗口
	- 基于DOS命令中的“cd”一层层进入
	- 在当前目录地址栏中输入cmd，快速在当前目录打开
	- shilt+鼠标右键，在此处打开命令窗口


### 扫盲：常用的DOs命令
```
ping www.baidu.com -t(持续的监听) :测试网速
Ctrl+c ：结束当前正在运行的操作
exit： 退出当前窗口
ipconfig -all： 查看当前电脑的物理地址/IP地址/子网掩码/DNS等信息
cls：清屏 
cd：进入到指定的文件目录（window电脑需要先进入指定的磁盘E:）
	cd ../ : 返回上级目录
	cd ./  : 当前目录
	cd /   : 根目录

dir：查看当前目录下所有的文件
mkdir 创建文件夹	
copy con bb.js  创建一个文件并且给文件中输入内容，输入完成后，用ctrl+c结束并保存
rmdir 删除文件夹
del xxx.xxx  删除文件
```

### NPM模块
安装完成node后，基本上自带npm模块管理器
-也可以基于npm等第三方包管理工具下载（yarn/bower...都是第三方模块管理工具）

1.npm下载的资源都是在https://www.npmjs.com/中下载的 
	```npm install xxx：把资源或者第三方模块下载到当前目录下

	   npm install xxx -g(global):把资源或者第三方模块安装到全局下（目的：以后可以基于命令来操作一些事情）

		npm uninstall xxx / npm uninstall xxx -g:从本地或者全局卸载
	```

	>基于npm安装的一些细节点：
	>-需要联网（基于npm是从国外服务器上下载资源，所以下载速度较慢）
	>-下载成功后，当前目录会增加一个node_modules文件夹，在这个文件夹中找到我们安装的模块
	>-一般来说，下载下来的内容包含源码和最后供开发者使用的压缩版本


			npm install nrm -g
			安装成功后，我们可以使用nrm命令
			nrm ls查看当前可用源
			nrm use xxx 使用某个源
		“可以基于yarn来安装管理”
			首先还是要先安装yarn 安装到全局，然后基于yarn安装我们需要的模块
			> 基于yarn安装（只能安装到本地，不能安装到全局）
			> yarn add xxx
			> yarn remove xxx

		基于cnpm淘宝镜像来处理

3.解决安装版本的问题
》首先查看当前模块的历史版本信息
》 npm view jquery > jquery.version.json： 把当前模块的历史信息输出到具体的某个文件中（文件名自己随便起的）
》 安装指定的版本模块
》 yarn add jquery@1.11.3   @指定符，具体版本号



git和gitHub    //gitHub.com

### git的基础知识
git是一个分布式代码版本管理控制系统
》 -记录当前产品代码的所有版本信息（历史修改信息），而且方便快速回退到某一个具体的版本
》 - 方便团队协作开发，能够检测代码冲突，能够合并代码等

svn：在git诞生之前就已经存在的版本控制系统，不过它是“集中式”管理

git：是分布式版本管理系统
	每个开发者的本地都是一个git仓库
	//=》在本地就可以生成历史版本
1.集中式版本控制系统

2.分布式版本控制系统

	// 集中式和分布式的优缺点
	// 传输速度的问题


3.CDN加速 
	地域式服务分布管理系统




### git的工作原理和基础操作
在本地创建git仓库管理我们的代码
> 初次使用git，我们先在本地配置一些基础信息
	$ git config -l （查看本地创建的信息）
		// user.name=<E5><AE><8B><E5><BA><B7><E4><B9><90>
	    // user.email=songkangle@iqurong.com
	$ git config --global user.name songkangle(名字)
	$ git config --global user.email sklpython@163.com
		建议大家配置的用户名和邮箱和gitHub保持一致，（这样以后在本地向gitHub
		推送内容的时候，能够展示出谁推荐的）

1.git init（创建一个本地仓库）
》 会在当前目录下创建一个空的仓库，文件目录中生曾一个“.git”的隐藏文件，这个文件很重要，我们本地仓库的版本信息等都存储在这里。

2.在当前目录（git仓库根目录创建一个".gitignore"文件，这个文件中存储了当git提交的时候所忽略的文件）
	touch .gitignore


git是LINUX开发的

### git工作原理及操作
当我们在本地创建一个git仓库后，我们可以基于这个仓库管理我们的代码。

”git的工作流程“
》 每一个git仓库都划分为三个区域
》 -工作区： 编辑代码的地方
》 -暂缓区： 临时存储要生成版本代码的地方
》 -历史区： 存储的是生成的每一个版本代码



···工作区提交到暂缓区···
git atatus   
	：查看代码或者文件的状态（当前处于哪个区）
	：红色（当前处于工作区，还没有提交到暂缓区）
	：绿色（当前处于暂缓区，还没有提交到历史区）
	：如果没有文件，代码三个区域代码已经同步，历史版本也在历史区生成了

	git add filename(文件)
	git add .或者-A（所有） 
		把当前工作区中所有最新修改的文件提交代暂缓区

···暂存区到历史区···
git commit
	这样执行后，会弹出一个提交文本输入界面，需要我们编写本次提交到历史区，给当前版本编写的备注信息
	》 先按i进入编辑插入模式
	》 输入备注信息
	》 按ESC
	》 输入“:wq”保存并退出

git commit -m"自己需要编写的备注信息"

git log 产看提交记录
git reflog 查看所有的历史记录（包括历史区回滚后）

查看每个区代码的区别：
	git diff 工作区VS暂缓区
	git diff master 工作区VS历史区（master分支）
	git diff --cached 暂存区VS历史区


### git和gitHub同步
1.让本地的git仓库和远程仓库建立关系
	git remote -v
	 （查看所有的关联信息）
	git remote add origin xxx【远程仓库git地址】  
	   建立关联
	git remote remove xxx 
		移除关联
	我们远程仓库管理的名字一般叫origin

2.把本地的代码推送到远程仓库上，或者从远程仓库上拉取最新的信息到本地仓库
》 我们本地推送和拉取的信息，既有代码也有版本信息，所有说与其说是推送和拉取，不如说是和远程仓库保持信息的同步。

### 在推送之前，我们都应该先拉取

git push origin master
	git pull origin (这个名字就是和远程仓库关联的这个名字，以自己设置的为主)  master 
	从远程仓库的master分支拉取最新的信息

git push origin master
	把自己本地信息推送到远程仓库master分支下

	如果名字是origin，分支走的也是master分支，后面的都可以不写，也就是执行 git pull /git push