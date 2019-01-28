/*
 * JS是一门编程语言（具备编程思想）
 * 	【面向对象】
 *		JS/JAVA/PHP/C#/PYTHON/C++
 * 	【面向过程】
 *		C
 *  面向对象编程：需要我们掌握：“对象。类，实例”的概念。
 * 		对象：万物皆对象
 *		类： 对象的具体细分（按照功能特点进行分类：大类，小类）
 * 		实例：类中具体的一个事物（拿出类别中的具体一个实例进行研究，那么当前类别下的其他实例也具备这些特点和特征）
 *
 * 	整个JS就是基于面向对象设计和开发出来的语言，我们学习和实战的时候也要按照面向对象的思想去体会和理解
*/

// => js中的内置类、
	// 一张图
// => 自定义类
	
/*
 * 基于构造函数创建自定义类（constructor）
 * 1.在普通函数执行的基础上“new xxx()”,这样就不是普通函数执行了，而是构造函数执行，当前的函数名称之为“类名”，接收的返回是当前类的一个实例
 * 2.自己创建的类名最好第一个单词首字母大写
 * 3.这种构造函数设计模式执行，主要用于组件，类库，插件，框架等的封装，平时编写业务逻辑一般不这样处理。
*/

function Fn(){

}
Fn();  //=> 普通函数执行
var f = new Fn();   // =》Fn是类 f是类的一个实例
console.log(f)
var f2 = new Fn();  //=> f2也是Fn的一个实例，f2和f是独立分开的，互不影响

var obj1 = {};	//=>obj1是Object的一个实例
var obj2 = {};  //=>obj2是Object的一个实例



/* 
 * JS中创建值有两种方法
 * 	1.字面量表达式
 *  2.构造函数模式
*/
var obj = {};  //=>字面量方式
var obj = new Object();  //=>构造函数模式
// =》 不管是哪一种方式创建出来的都是Object类的实例，而实例之间是独立分开，所以 var xxx = {} 这种模式就是JS中的单例模式

Object()  //普通函数执行
new Object() //类执行



//=》基本数据类型值基于两种不同的模式创建出来的值是不一样的
//=>基于字面量创建出来的值是基本类型值
//=>基于构造函数创建出来的值是引用类型
	// Num2是数字类的实例，Num1也是数字类的实例，它只是JS表达数字方式之一。都可以使用数字类提供的属性和方法
var num1 = 12;  // 字面量创建
typeof num1 // "number"
var num2 = new Number(12) //
typeof num2 // "object"




// ### new的机制
function  Fn(name,age){
	var n = 10;
	this.name = name;
	this.age = age + n;
}
Fn()
/*
 * =>普通函数执行	
	// 1.形成一个私有的作用域
	// 2.形参赋值
	// 3.变量提升
	// 4.代码执行
	// 5.堆栈内存释放
*/


/* 
 * js中构造函数执行原理
 * 1.和普通函数执行一样，形成一个私有的用于域（栈内存）
 		-- 形参赋值 （私有变量）
 		-- 变量提升  （私有变量）
 * 2.【构造函数执行独有】：在JS代码自上而下执行之前，首先在当前形成的私有栈中创建一个对对象（创建一个堆内存：暂时不存任何东西），并且让函数中的执行主体（this）	执行这个新的堆内存（this===创建的对象）
 * 3.代码自上而下执行
 * 4.【构造函数支持独有】代码执行完成，把之前创建的堆内存地址返回（浏览器默认返回）

*/


var f1 = new Fn('xxx',20);
var f2 = new Fn('aaa',30);
console.log(f1===f2)  // fasle两个不同的实例（两个不同的堆内存地址）

console.log(f1.age) // =>30
console.log(f2.name) // 'aaa'
console.log("name" in f1);  //true: name&age在两个不同的实例都有存储，但是都是每个实例自己的私有的属性

console.log(f1.n) // undefined 只有this.xxx=xxx的才和实例有关系，n是私有作用域中的一个私有变量而已（this是当前类的实例）


/*
 * 构造函数执行，不写RETURN，浏览器回默认返回创建的实例，但是如果我们自己写了RETURN？
 * 1.return是一个基本值，返回的结果依然是类的实例，没有受到影响
 * 2.如果返回的是引用值，则会吧默认返回的实例覆盖，此时接收到的结果就不再是当前类的实例了
 * =》 构造函数执行的时候，尽量减少return的使用，防止覆盖实例

*/
function Fn(){
	var n = 10;
	this.m = n;
	return "哈哈";
	return //=》这样RETURN是结束代码执行的作用，并且不会覆盖返回的实例
	return {name: ''}
}
var f = new Fn();  //=》new Fn;在构造函数执行的时候，如果Fn不需要传递参数，我们可以省略小括号，意思还是创建实例（和家小括号没有区别）
console.log(f.n) //undefined
console.log(Fn:{})


// => instanceof: 检测某一个实例是否隶属于这个类
console.log(f instanceof Fn)   //true
console.log(f instanceof Array)//false
console.log(f instanceof Object) // true(万物皆对象：所以的对象，包含创建的实例都是Object的实例)


// => in:检测当前是否存在某个属性(不管当前这个属性是对象的私有属性还是共有属性，只要有结果就是TRUE)
console.log('m' in f)  // true;
console.log('n' in f)  // false
console.log('toString' in f) //=>True, toString是它的公有属性

//hasOwnProperty：检测当前属性是否为对象的私有属性（不仅要有这个属性，而且必须还是私有才可以）
console.log(f.hasOwnProperty('m'))//true
console.log(f.hasOwnProperty('n'))//false
console.log(f.hasOwnProperty('toSting'))//Fasle /虽然有这个属性但是不是私有属性
