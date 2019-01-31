// 1
console.log(a)
var a = 12;
function fn(){
	console.log(a);
	var a = 13;
}
fn();
console.log(a);     

// 答案 B
/*
A: undefined 12 13
B: undefined undefined 12
C: undefined undefined 13
D: 有程序报错
*/

// 2
console.log(a)
var a = 12;
function fn(){
	console.log(a);  //只要var过的，向上级作用域查找
	a = 13;
}
fn();
console.log(a)

// 答案 A
/*
A: undefined 12 13
B: undefined undefined 12
C: undefined undefined 13
D: 有程序报错
*/


// 3
console.log(a)
a = 12;
function fn(){
	console.log(a);  //只要var过的，向上级查找
	a = 13;
}
fn();
console.log(a)

// 答案 D
/*
A: undefined 12 13
B: undefined undefined 12
C: undefined undefined 13
D: 有程序报错
*/


// 4
var foo = 1;
function bar(){
	if(!foo){
		var foo = 10;
	}
	console.log(foo)
}
bar();


// 答案  B
/*
A: 1
B: 10
C: undefined
D: 有程序报错
*/



// 4

/*  解析
 * 变量提升
 *    	var foo;
 		bar = aaafff000; 
 *
*/
var foo = 1;
function bar(){
	/*
      形参赋值： 无
      变量提升
      	var foo; (不管条件是否成立，都要进行变量提升，新浏览器中对于判断题中的函数只是提前说明)
	*/ 
	if(!foo){	//=> !undefined => TRUE
		var foo = 10;
	}
	console.log(foo)  //=>10
}
bar();
 
// 答案  B
/*
A: 1
B: 10
C: undefined
D: 有程序报错
*/

// 5
var n = 0;
function a(){
	var n = 10;
	function b(){
		n++;
		console.log(n);
	}
	b();
	return b;
}
var c = a();
c();
console.log(n)


// 答案  C
/*
A: 1  1  1
B: 11 11 0
C: 11 12 0
D: 11 12 12
*/



// 6
var a = 10,b=11,c=12;
function test(a){
	a = 1;
	var b = 2;
	c = 3;
}
test(10)
console.log(a)  //10
console.log(b)  //11
console.log(c)  //3

// 答案  D
/*
A: 1  11 3
B: 10 11 12
C: 1  2  3
D: 10 11 3
*/


// 7

/*
 * 变量提升
 *  var a; 不管条件是否成立都要进行变量提升，在全局作用域下声明的变量，也相当于给window设置了一个对象的属性，而且两者之间建立映射机制《--》window.a = undefined
 *
 * in： 检测一个属性是否属于这个对象（不管是私有属性还是公有属性，只要有这个属性结果就为TRUE）
 * hasOwnProperty： 检测某一个属性是否为对象的私有属性（只有这个属性是私有的才可以）
*/

if(!(("a") in window)){
	var a = 1;
}
console.log(a);

// 答案  B
/*
A: 1
B: undefined
C: 报错
D: 以上答案都不对
*/ 



// 8

/*
 * 变量提升
 	var a;
 	b = aaafff000;
*/
var a = 4;
function b(x,y,a){
	/*
     *	形参赋值：x=1；y=2;a=3

     * arguments: 函数内置的实参集合，不管是否设置形参，传递的实参值都在这个几个中存在
     	{
			0：1
			1：2
			2：3
			length:3
			callee: 函数本身
     	}
		在js非严格模式下，函数中的形参变量和Arguments存在映射机制（映射:相互之间影响）
		具体来说：第一个形参变量修改为100，那么ARG[0]的值也跟着修改为100
		
	*/
	console.log(a)      //3
	arguments[2] = 10;  //把传递的第三个实参值修改为10，此时第三个形参变量也会收到影响跟着变为10
	console.log(a)		// 10
}
a = b(1,2,3);  //=>a=b的执行结果 =》a=undefined； b函数中并没有编写return，所以默认函数返回为undefined
console.log(a);

// 答案  D
/*
A: 3 3 4
B: 3 10 4
C: 3 10 10
D: 3 10 undefined
*/ 


// argument的面试题 

// js非严格模式下
function fn(x,y,z){
	// arguments和形参赋值映射建立在函数执行后形参赋值的一瞬间，此时能建立映射机制的建立映射机制，不能建立映射机制的以后不管怎么做，都不能在建立了
	/*
	 * 形参
	 	x = 10
	 	y = undefined y也是私有变量，不是没有赋值，而是赋值为undefined
	 	z = undefined
	 * Arg
	 	{
			0： 10
			length： 1
	 	}
	 *
	 * ARG和形参之间的映射是以ARG的索引为基础完成的，在ARG中有这个索引，浏览器会完成和对应形参变量中的映射机制搭建，如果形参比ARG中的个数多哦，那么多出来的形参是无法和ARG中对应的索引建立关联的
	*/
	var arg = arguments;
	arg[0] = 100;
	console.log(x)  //100
	y = 200;
	console.log(arg[1]) //undefined、
	arg[1] = 300;
	/*
		此时的arg
		* Arg
	 	{
			0： 10,
			1: 300
			length： 2
	 	}
	*/
	console.log(y);  //undefined
	y = 400;
	console.log(arg[1]);  //undefined
}
fn(10)


/*

// js严格模式
//>在当前作用域的”第一行“添加”use strict“即可。这样在当前作用域中就开启了js的严格模式
"use strict" // 相当于这个js都开启了严格模式（只对当前这个JS文件中代码生效，下一个js文件需要开启严格模式，第一行还需要在编写），真实项目中，我们一般都会把所有的JS文件合并压缩为一个导入页面中
function fn(){
	// "use strict"  //=>只在当前作用域中使用严格模式

}

*/


// 9
/*
  * 变量提升
  	var foo；
*/

/*
// =》 逻辑与&& 和 逻辑或 ||
1.条件判断中
2.在赋值操作中也会用到，
	var a = 1 || 2; //首先验证1是真假，如果1赋值给a，如果为假，把2赋值给a。
	var b = 1 && 2; //"A&&B":先验证A的真假，为真结果是B，为假结果是A

	1.||
	function fn(x,y){
		if(x === undefined){
			x = 0
		}
		if(typeof x === undefined){
			x = 0
		}
		x = X || 0
	}
	fn()

	2.&&
	function fn(callback){
		//=>如果传递的值是个函数，我们才让其执行
		if(typeof callback === 'undefined'){
			callback()
		}

		callback && callback() //上面if判断的简写班，不严谨，默认
	}
	fn(function(){})  //


	3.//逻辑与和逻辑或的混合模式
	// 优先级： 逻辑与的优先级高级逻辑或
	0 || 1 && 2 || 0 || 3 && 1   //2

	4. 逻辑或的实战应用：形参赋值默认值（初始形参）
		在ES6新语法规范中可以直接给形参设置默认值
		function fn(x=0){
			//形参X没有传递值，默认值等于0，一旦传值，不管传递的是啥，都是按照传递的值处理的
		}	
		fn(undefined) //=》0 传递undefined，浏览器是按照没有传递值处理的  

*/


var foo = 'hello';
(function (foo){
	/*
	 * 形参赋值： foo = 'hello'
	 * 变量赋值： var foo; (这一步省略:因为在私有作用域中已经有这个foo这个变量了)
	*/
	console.log(foo)       //hello
	var foo = foo || 'world'   // hello || world
	console.log(foo)	  //hello
})(foo)  //=> 把全局的Foo的值作为实参传递给哦函数的形参= 'hello'
console.log(foo)		//hello


// 答案  A
/*
A: hello hello hello
B: undefined world hello
C: hello world world
D: 以上答案都不正确
*/


// 10
var a = 9;
function fn(){
	a=0;
	return function(b){
		return b + a++
	}
}
var f = fn();
console.log(f(5))    //5
console.log(fn()(5)) //5
console.log(f(5))    //6
console.log(a)       //2

// 答案  C
/*
A: 6 6 7 2
B: 5 6 7 3
C: 5 5 6 2
D: 以上答案都不正确
*/



// 11
var ary = [1,2,3,4];
function fn(ary){
	ary[0] = 0
	ary = [0];
	ary[0] = 100;
	return ary
}
var res = fn(ary);
console.log(ary)     //[0,2,3,4]
console.log(res);	 //[100]

// 答案  [0,2,3,4] [100]



// 12

/*
 解析
 	变量提升：
 		fn = AAAFFF000
 		var f;

*/ 
function fn(i){
	return function(n){
		// n+(i++)  不管是加小括号还是不加小括号，都是n+i再算i++
		console.log(n+(i++))
	}
}
var f = fn(10);  // f = fn(10) = BBBFFF111 
f(20);
fn(20)(40)    
fn(30)(50)
f(30)


// 答案   30 60 80 41


// 13
var i = 10;
function fn(){
	return function(n){
		console.log(n+(++i))
	}
}

var f = fn();  // f = fn(10) = BBBFFF111 
f(20);		// 31
fn()(20)    // 32
fn()(30)    // 43
f(30)       // 44

// 答案 31 32 43 44




// 14 

// 自执行函数在作用域下执行，this指向window（非严格模式下）
var num = 10;
var obj = {num:20};
obj.fn = (function(num){
	this.num = num+3
	num++
	return function(n){
		this.num += n
		num++;
		console.log(num)
	}
})(obj.num)

var fn = obj.fn;
fn(5)              //22
obj.fn(10)         //23
console.log(num,obj.num) //65 30


// 答案 22 23 65 30




var num = 10; // (1)10 (2) 30 （3）51
var obj = {num:20};			//obj=aaafff000 =>{num:20,fn:bbbfff000}
obj.fn = (function(num){
	/*
		num = (1)10 (2)20 （3）21

	*/
	num = this.num + 10;
	this.num = num + 10；
	return function(){      //=> bbbfff000
		/*
			fn()
          第一次fn执行this=》window
          	window。num+= ++num
		*/

		/*
			obj.fn
				this.=>obj

		*/
		this.num += ++num
	}
})(num)

/*
  	var num; obj; fn=bbbfff000

*/ 

var fn = obj.fn;
fn()              
obj.fn()         
console.log(num,obj.num)

// 答案 51 42





/*
	1 和 new Number(1) 的区别？
		前面是一个基本数据类型
		后面是一个引用数据类型值（类）
	相同：都是Number的一个实例
*/ 

/*
 * 函数类型
 	1。普通函数
 	2.构造函数（类，内置类和自己创建的类）

 * 对象类型
 	 1.普通对象
 	 2.Math \ JSON
 	 3.类的实例（数组，正则。日期。。。）
	 4.ptototype 或者 __proto__
	 5.arguments或者元素集合等类数组
	 6.函数也是一种对象
	 7. ....
	 =>万物皆对象
*/


/*
	1.每一个函数（类）都有一个prototype（原型）属性，属性值是一个对象；这个对象中存储了当前类供实例调取使用的公有属性和方法（唯一使用）
	2.在浏览器默认给原型开辟堆内存中有一个属性constructor，存储的是当前函数本身
	3.每一个对象（包含实例）都有一个__proto__(原型链)属性，这个属性指向当前实例所属类的原型（不确定所属的类，都指向object.prototype）
*/

/*
 new Fn()
 构造函数执行
	1.形成私有作用域（栈内存）
	2.变量提升
	3.创建实例对象 （相当于obj={})，this执行创建的实例对象
	4.把创建的实例对象默认返回
*/





// 15

function Fn(){
	this.x = 100;
	this.y = 200;
	this.getX = function (){
		console.log(this.x)
	}
}
Fn.prototype.getX = function(){
	console.log(this.x)
}
Fn.prototype.getY = function(){
	console.log(this.y)
}
var f1 = new Fn;
var f2 = new Fn;
console.log(f1.getX===f1.getX  // false
console.log(f1.getY===f1.getY) // true 
console.log(f1.__proto__.getY === Fn.prototype.getY) //true
console.log(f1.__proto__.getX === f2.getX)   // false
console.loh(f1.getX === Fn.prototype.getX)   // false
console.log(f1.constructor)					// Fn
console.log(Fn.prototype.__proto__.constructor);  Object
f1.getX();				//100  
f1.__proto__.getX();	//undefined this=>f1.__proto__
f2.getY();			    //200
Fn.prototype.getY		//this: Fn.prototype  //undefined







// 16

var fullName = 'language';
var obj = {
	fullName: 'javascript',
	prop:{
		getFullName: function(){
			return this.fullName
		}
	}
}
console.log(obj.prop.getFullName()); //this：obj.prop => obj.prop.fullName=>undefined
var test = obj.prop.getFullName;
console.log(test())							//language


// undefined language


var name = 'window';
var  Tom = {
	name: 'Tom',
	show: function(){
		console.log(this.name)		//’window‘
	},
	wait: function(){
		var fun = this.show; //Tom.show
		fun()    //this：window
	}
}
Tom.wait(); // this:Tom 









// 17


/*
 * 在实际项目记忆面向对象开发的时候（构造原型设计模式），我们根据需求，很多时候会重定向类的原型（让类的原型指向自己开辟的堆内存）
 ·	[存在问题]
 		1.自己开辟的堆内存中没有constaurctor，导致类的原型构造函数缺失。(解决方案“：自己手动在堆内存中增加constructor属性)
 		2.当原型重定向后，浏览器默认开辟的那个原型堆内存会被释放掉，如果之前已经存储了一些方法或者属性，这些东西都会丢失。（所以内置类的原型不允许重定向到自己开辟的堆内存，因为内之类原则上自带很多属性方法，重定向都没了。这样是不被允许的）
*/

// 当我们需要给类的原型批量设置属性和方法的时候，一般都是让原型重定向到自己创建的对象中
function Fn(){

}
Fn.prototype={
	constructor: Fn,
	aa:function(){

	},
	bb:function(){

	},
	cc:function(){

	}
}


// 私有属性：自己堆内存中存储的属性相对于自己来说是私有的
// 公有属性：自己基于__proto__找到的属性，相对于自己来说是公有的

function fun(){
	this.a = 0;
	this.b = function (){
		alert(this.a)
	}
}	
fun.prototype = {
	b: function(){
		this.a = 20;
		alert(this.a)
	}
	c:function(){
		this.a = 30;
		alert(this.a)
	}
}	
var my_fun = new fun();
my_fun.b();
my_fun.c();
console.log(my_fun.hasOwnProperty('c')) // false
console.log(fun.prototype.hasOwnProperty('c')) // true

// 答案 0 30


// 19
function Fn(){
	var n = 10;
	this.m = 20;
	this.aa = function(){
		console.log(this.m)
	}
}

Fn.prototype.bb = function(){
	console.log(this.n)
}
var f1 = new Fn;
Fn.prototype = {
	aa: function(){
		console.log(this.m+10)
	}
}


var f2 = new Fn;
console.log(f1.constructor);    //Fn
console.log(f2.constructor);	//Object
f1.bb()							//undefined
f1.aa()							//20
f2.bb()							//报错
f2.aa()							//20
f2.__proto__.aa()				//NaN







// document.parentNode 和 document.parentnode
console.log(document.parentNode)  //null
console.log(document.parentnode)  //undefined


// 怎么样规避多人开发函数重名的问题
	// 基于单例模式
	// 模块化思想

// Javascript如何面向对象中的继承？


// 你理解的闭包作用是什么，有缺点？
	// 保护机制
	// 保存机制



// 有这样一个村庄，村里的每一个丈夫都背着妻子偷情，村里的每个妻子都知道除了自己丈夫以外的男人偷情，村里有个规定，如果妻子知道自己的丈夫偷情必须当天处决，有一天村里的女头领说村里一个丈夫偷情，接下来会发生什么？