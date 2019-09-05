// 1.（京东）请写出如下代码的打印结果
function Foo() {
	// new之后,相当于把原先的东西代替掉了
    Foo.a = function() {
        console.log(1)
    }
    this.a = function() {
        console.log(2)
    }
}
Foo.prototype.a = function() {
    console.log(3)
}
Foo.a = function() {
    console.log(4)
}
Foo.a();				// 4
let obj = new Foo();
obj.a();				// 2
Foo.a();				// 1


// 2.（滴滴、饿了么）写 React / Vue 项目时为什么要在列表组件中写 key，其作用是什么？
/*
	key是给每一个vnode的唯一id,可以依靠key,更准确, 更快的拿到oldVnode中对应的vnode节点。
	1. 更准确 == 因为带key就不是就地复用了，在sameNode函数 a.key === b.key对比中可以避免就地复用的情况。所以会更加准确。
	2. 更快 == 利用key的唯一性生成map对象来获取对应节点，比遍历方式更快。(这个观点，就是我最初的那个观点。从这个角度看，map会比遍历更快。)
*/



// 3.什么是防抖和节流？有什么区别？如何实现？
/*
	// 防抖
	触发高频事件后n秒内函数只会执行一次，如果n秒内高频事件再次被触发，则重新计算时间

	思路：
		每次触发事件时都取消之前的延时调用方法
	function debounce(fn) {
      	let timeout = null; // 创建一个标记用来存放定时器的返回值
      	return function () {
        	clearTimeout(timeout); // 每当用户输入的时候把前一个 setTimeout clear 掉
        	timeout = setTimeout(() => { // 然后又创建一个新的 setTimeout, 这样就能保证输入字符后的 interval 间隔内如果还有字符输入的话，就不会执行 fn 函数
          		fn.apply(this, arguments);
        	}, 500);
      	};
    }
    function sayHi() {
      	console.log('防抖成功');
    }
	var inp = document.getElementById('inp');
	inp.addEventListener('input', debounce(sayHi)); // 防
*/


// 4.数组扁平化
var arr = [[1,2],3,[[4],5]];
function flatten(arr){
	return [].concat(...arr.map(x => Array.isArray(x) ? flatten(x) : x ));
}

var arr1 = [];
function flatten(arr){
	for(var i = 0;i<arr.length;i++){
		if(Array.isArray(arr[i])){
			flatten(arr[i])
		}else{
			arr1.push(arr[i]);
		}
	}
	return arr1;
}




// 5.关于JSON.parse(JSON.stringify(obj))实现深拷贝应该注意的坑?
// https://www.jianshu.com/p/b084dfaad501 


// 6.图像懒加载的原理是什么？
// 页面加载时，将图片加载的链接，保存在img标签的自定义属性中，src属性为空，并监听窗口的scroll事件。当img标签出现在视口中时，利用js将图片加载编写填写至src属性中，实现动态加载图片











// 前端面试总结1 https://blog.csdn.net/zjw_python/article/details/82078702
// 前端面试总结2 https://blog.csdn.net/weixin_43606158/article/details/89811189






