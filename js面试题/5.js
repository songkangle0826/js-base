/*
 * 面向对象： 类的继承封装和多态
 * 	[封装]：
 		把实现一个功能的JS代码进行封装，主要目的：“低耦合高内聚”
 
 *	[多态]
  		重载： 方法名相同，参数的个数或者类型不同，此时名字相同的方法叫做方法的重载（后台语言中的重载），js中不存在重载的
 		重写： 子类重写父类的方法
 			js中的重载指的是：同一个方法根据传参不一样，实现不同的功能
 		
 		function fn(n, m){}
		function fn(n,m,x){}
		fn(10,20);
		fn(10,20,30);

 * 	[继承]
 		子类继承父类的属性和方法
 			1.原型继承
 			2.call继承
 			3.寄生组合继承 (es5)
 			4.ES6中class类实现继承 (es6)
 			...
*/ 	

// 继承的目的：就是让子类拥有父类的方法和属性

// 原型继承: 让子类的原型指向父类的一个实例
/*
	function A() {
		this.x = 100;
	}
	A.prototype = {
		constructor: A,
		getX: function(){
			console.log(this.x)
		}
	}

	function B(){
		this.y = 200;
	}
	// 原型继承：
	1.方式： B.prototype = new A() A的实例本身就具备父类A的私有属性和公共方法，子类的原型指向它，那么子类B的实例就可以找到这些属性和方法了
	2.和传统后台语言的继承不一样，子类继承父类，并不是把父类父类的属性和方法克隆一份副本给子类的（这样处理子类和父类就没有直接关系了），js中的原型继承就是让子类和父类简历原型链接的机制，子类的实例调用原型上的方法，都是基于原型链的查找机制来完成的

	存在的问题： 子类可以重写父类原型上的方法（重写），子类和父类还有关系的 B.prototype.__proto__.getX = null; 把父类原型上的getX重写为null，A的其他实例也会受到影响 

	原型继承存在的问题： 
	1.父类实例私有的属性已经公有的属性都变为子类实例的公有属性
	2.如果子类b原型上之前又属性和方法，重新执行A的实例后，之前的方法都没有用了
	B.prototype = new A();
	let f = new B();  //f是B类的实例
	*/

// =》 CALL继承： 把父类A作为普通函数执行，让A中的this变为B的实例，相当于给B的实例增加一些属性和方法（弊端：把父类A当作普通函数执行和原型没有关系了，仅仅是把A中的私有属性变为B中的私有属性而已，A原型上的公有属性方法和B及它的实例没有啥关系）
// new A()把A当作类创建它的实例：this实例 
// A()把A当作普通函数执行this: window
/*
	function A() {
		this.x = 100;
	}
	A.prototype = {
		constructor: A,
		getX: function(){
			console.log(this.x)
		}
	}
	function B(){
		A.call(this); //->call继承 把A执行，让A中的this变为f
		this.y = 200;
	}
	let f = new B();
	*/


// 寄生组合继承： A的私有变为B的私有，A的公有变为B的公有
	function A() {
		this.x = 100;
	}
	A.prototype = {
		constructor: A,
		getX: function(){
			console.log(this.x)
		}
	}
	function B(){
		A.call(this); //->call继承 把A执行，让A中的this变为f
		this.y = 200;
	}
	// B.prototype = A.prototype; //=>一般不这样处理，因为这样模式可以轻易修改父类A原型上的方法（重写“太方便”）。这样会导致A的其他实例也受到影响
	
	B.prototype = Object.create(A.prototype)
	let f = new B();
// 寄生组合继承和原型继承的唯一区别
	B.prototype = new A(); 创建A的实例虽然指向了A的原型，但实例中不是空对象，存放了A的私有属性，这些属性变为B的公有属性
	B.prototype = Object.create(A.prototype)好处在于我们是创建了一个没有任何私有属性的空对象，指向A的原型，这样B的公有中就不会存在A的私有属性了


/*
 * Object.create： 内置Object类天生自带的方法
 	1.创建一个空对象
 	2.让新创建的空对象的__proto__指向第一个传递进来的对象（把OBJ作为空对象的原型）
*/
let obj = {
	name: '哈哈'
}
Object.create(obj)


// ES6中class类实现继承
// 1.es6中创建是有自己标准语法的(这种语法创建出来的类,只能用new执行,不能当作普通函数执行)
class Fn{ //=> Fn是类名，没有小括号
	constructor(n,m){
		// =>等于传统ES5类的构造图
		this.x = n;
		this.y = m;
	}
	// 给Fn的原型上设置方法(只能设置方法不能设置属性)
	getX(){
		console.log(this.x)
	}
	//=>把Fn当作一个普通对象设置私有方法(和实例没有关系),同样也只能设置放不能写属性
	static AA(){

	}
}
Fn.prototype.BB = 100;
Fn.AA = function(){} //=>把Fn当作

// let f = new Fn(10,20);

class A{
	constructor(n){
		console.log(n)
		this.x = 100;
	}
	getX(){
		console.log(this.x)
	}
}

class B extends A{ //=> extends类似于实现了原型继承
	constructor(){
		super();//=>类似于call继承: 这里super相当于把A的constructor给执行了,并且让方法中this是B的实例.super中传递的实参都是给A的constructor传递
		this.y= 100;
	}
	getY(){
		console.log(this.x)
	}
}
let f = new B();