/*
 * [DOM事件]
 *
 * 1.什么是事件？
 * 	事件就是一件事情或者一种行为（对于元素来说，它的很多事件都是天生自带的），只要我去操作这个元素，就会触发这些行为。
 *  "事件就是元素天生自带的行为，我们操作元素，就会触发相关的事件行为"
 * 
 * 2.事件绑定： 给元素天生自带的事件行为绑定方法，当事件触发，会把对应的方法执行
 *
 * 3.元素天生自带的事件?
 	【鼠标事件】
 		click: 点击（pc端是点击，移动端的click是单击(移动端使用click会有300MS延迟的问题)）
    	dblclick: 双击
    	mouseover: 鼠标经过
    	mouseout: 鼠标移出
    	mouseenter: 鼠标进入
    	mouseleave: 鼠标离开
    	mousemove: 鼠标移动
    	mousedown: 鼠标按下(鼠标左右键都起作用,它是按下即触发,click是按下抬起来才触发,而且是先把down和up触发,才会触发click)
 		mouseup: 鼠标抬起
 		mousewheel: 鼠标滚轮滚动
 		...
 	[键盘事件]
 		keydown: 键盘按下
 		keyup: 键盘抬起
 		keypress: 和keydown类似,只不过keydown返回的是键盘码,keypress返回的是ASCII码值
 		input: 由于PC端有实体的物理键盘,可以监听到键盘的按下和抬起,但是移动端是虚拟的键盘,所有keydown和keyup在大部分手机上都没有我们使用input事件统一处理(内容改变事件)
 	[表单元素常用事件]
 		focus: 获取焦点事件
 		blur: 失去焦点
 		change: 内容改变
 	[其他常用事件]:
 		load: 加载完成
 		unload: 
 		beforeunload: 关闭之前
 		scroll: 滚动条滚动事件
 		resize: 大小改变事件: window.onresize = function(){}  //当浏览器窗口大侠发生改变,会触发这个事件,支持对应事件
	[移动端手指事件]
		touchstart: 手指按下
		touchmove: 手指移动
		touchend: 手指离开
		touchcancel: 因为以外情况导致手指操作取消
		
		[gestures: ]
		gesturestart : 多手指按下
		getturechange: 手指改变
		gestureend: 手指离开

	[H5中的AUDIO/VIDEO音视屏事件]:
		canplay: 可以播放(视频过程中可能出现由于资源没有加载完成,导致的卡顿)
		canplaythrough: 资源加载完成,可以正常无障碍播放
		...
 *	
*/ 




var box = document.getElementById('box');
// 点击
box.onclick = function(){
	console.log('click')
}
// 双击
box.ondblclick = function(){
	console.log('no')
}
// mousedown
box.onmousedown = function(){
	console.log('onmousedown')
}
box.mouseup = function(){
	console.log('up')
}