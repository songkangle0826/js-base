// 函数也是对象

/*
 * 函数有三种角色
 *	1.普通函数
 		堆栈内存释放
 		作用域链
 *	2.类
 		》prototype: 原型
 		》__proto__: 原型链
 		》实例
 *  3.普通对象
		》和普通的一个OBJ没有啥区别，就是对键值对的增删改查
		》
 	三种角色间没有什么必然关系 
*/

function Fn(){
	var n = 10;
	this.m = 100;
}
Fm.prototype.aa = function(){
	console.log('aa')
}
Fn.bb = function(){
	console.log("bb")
}

//普通函数执行
Fn();  //=> this: window   有一个私有变量n，和原型以及属性bb没有关系


// 构造函数执行
var f = new Fn;  //this: f
f.n  //> undefined  n不是私有变量和实例没有关系 

console.log(f.m)  //=> 100 实例的私有属性
f.aa  //=> 实例通过__proto__找到Fn.prototype上的方法

f.bb  //=> undefined   bb是把Fn当作一个普通的对象设置的属性而已，和实例没有半毛钱关系


// 普通对象
Fn.bb()






