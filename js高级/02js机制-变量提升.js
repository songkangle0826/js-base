// var a = 12;
// /*
//  * 1.先声明一个变量a，没有赋值（默认undefined）
//  * 2.在当前作用域中开辟一个位置存储12这个值
//  * 3.让变量a和12关联在一起 （定义）
// */ 

// var b = a;  //把a存储的值放到一个新的位置上（直接操作值），让新位置上的值和B保持关联，此时a和b没有关系
// b = 13;
// console.log(a);

// var ary1 = [12,23];
// var ary2 = ary1;
// ary2.push(100);
// console.log(ary1)

// // 数组方法
// // push,pop,unshift,shift,splice,concat,reverse,sort,join,indexOf/lastIndexOf,toString

// // 字符串方法
// // charAt/charCodeAt/indexOf/lastIndexOf/slice/substr/substring/split/toUpperCase/toLaserCase

// // 任意数求和
// function sum(){
// 	var total = null;
// 	for(var i=0;i<arguments.length;i++){
// 		var item = arguments[i];
// 		item=paeseFloat(item);
// 		isNaN(item) ? total+=item:null;
// 	}
// 	return total;
// }
// sum(12,23,'34','AA');   //函数在堆内存中以字符串的方式存储
// // 函数执行创建一个私有作用域，把之前创建函数时存储的字符串代码执行



// // 栈内存：作用域
// 1.提供一个供js代码自上而下执行的环境（代码都是在栈中执行的）
// 2.由于基本数据类型比较简单，他们都是直接在栈内存中开辟了一个位置，把值直接存储起来
// =》当栈内存呗销毁，存储的那些基本值也都被销毁了

// // 堆内存：引用值对应的空间
// 1.存储引用类型值得（对象：键值对 函数：代码字符串）
// =》当前堆内存释放被销毁，那么这个引用值彻底没了
// =》堆内存得释放：当堆内存没有被任何的变量或者其他东西所占用，浏览器会在空闲的时候，自主的进行内存回收，把所有不被占用的堆内存销毁掉（谷歌浏览器）
// 		IE浏览器（计数--内存泄漏）
// 	xxx = null通过空对象指针null可以让原始变量（或者其他东西）谁都不指向，那么原有被占用的堆内存就没有被其他东西占用了，浏览器被销毁它。


// ### 变量提升
/*
 * 变量提升：
 *  -> 当栈内存（作用域）形成，JS代码自上而下执行之前，浏览器首先会把所有的带“VAR（声明）”/“function（定义）” 关键字的提前“声明”或者“定义”，这种预先处理机制称之为“变量提升”
 * 
 * -> 声明（declare）： var a / function sum (默认值undefined)
 * -> 定义（defined）： a=12 （定义其实就是赋值操作）
 *
 * 【变量提升阶段】
 * =》带“VAR”的只声明未定义
 * =》带“FUNCTION”的声明和赋值都完成了
 *
 * -》 变量提升只发生在当前作用域（例如：开始加载页面的时候只对全局作用域下的进行提升，因为此时的函数中存储的都是字符串而已）
 *
 * =》 在全局作用域下声明的函数或者变量是“全局变量”，同理，在私有作用域下声明的变量是“私有变量”[带VAR/FUNCTION的才是声明]
 *
 * =>浏览器很懒，做过的事情不会重复执行第二遍，也就是当代码执行遇到创建函数这部分代码后，直接跳过即可（因为在提升阶段就已经完成函数的赋值操作了）
 *
 *
 *
 *
*/
// console.log(a);    //undefined,说明a已经存在 
// var a = 12;

// function sum(){
// 	var total = null;
// 	for(var i=0;i<arguments.length;i++){
// 		var item = arguments[i];
// 		item=paeseFloat(item);
// 		isNaN(item) ? total+=item:null;
// 	}
// 	return total;
// }
// console.log(sum(12,23,'34','AA'))


// ### 带VAR和不加VAR的区别
// => 在全局作用域下声明一个变量，也相当于给WINDOW全局对象设置了一个属性，变量的值就是属性值（私有作用域中声明的私有变量和WINDOW没啥关系）
// console.log(a);	//=>undefined
// console.log(window.a) // => undefined
// console.log('a' in window)  // =>TRUE 在变量提升阶段，在全局作用域中声明了一个变量A，此时就已经把A当作属性赋值给window了，只不过此时还没有给A赋值，默认UNDEFINED in:检测某个属性是否隶属于这个对象
// var a = 12;     //=》全局属性修改，window的属性值也跟着修改		
// console.log(a); // =>window的一个属性名A 12

// a = 13;
// console.log(window.a);   //13
// window.a = 14; 
// console.log(a)           //14

// // => 全局变量和WINDOW中的属性存在“映射机制”


// // ### in的操作（判断某个对象中是否有某个属性）
// var obj = {name:undefined};
// obj.name // undefined
// obj.age  // undefined
// console.log('name' in obj)  // true
// console.log('age' in obj)	// false



// ### 不带VAR
// => 不加VAR的本质是WINDOW的属性，不是变量
// console.log(a)        // a is not defined
// console.log(window.a) 		//=>undefined
// console.log('a' in window)  //=> false
// a = 12;	 //=>window.a=12
// console.log(a)  		//=>12
// console.log(window.a)   //=>12


// var a = 12,b = 13;//这样写B是带VAR的
// var a = b = 12;   //这样写B是不带VAR的


// console.log(a,b)  // undefined  undefined
// var a = 12,
//     b = 12;
// function fn(){
	// console.log(a,b)   //undefined,12
	/*
	 * 私有作用域中daiVAR和不带VAR也有区别
	 * 私有作用域下带VAR的是私有变量,带VAR的私有作用域变量提升阶段，都声明为私有变量，和外界没有关系
	 * 不带VAR的不是私有变量，会向它的上级作用域查找，看是否为上级变量，不是，继续向上查找，一直找到window为止（我们把这种查找机制叫做：“作用域链”），也就是我们在私有作用域中操作的这个非私有变量，是一直操作别人的。
	*/ 
	// var a = b =13; //(b不是私有变量的)
	/* var a = 13;b = 13; */ 
	// console.log(a,b)   //13,13
// }
// fn();
// console.log(a,b)    // 12,13

// function fn(){
// 	/*
// 	 * 变量提升
// 	*/
// 	// console.log(b) //: b is not defined
// 	b = 13;
// 	console.log('b' in window);  //=>true 在作用域链中查找的过程中，如果找到window也没有这个变量，相当于给window设置了一个属性B
// 	console.log(b); // =》 13
// }
// fn();
// console.log(b);  // =>13



// ### 只对等号左边进行变量提升
/*
 * 变量提升
 * 	var fn; =>只对等号左边的进行变量提升
 *  function sum => 声明加定义
*/
// sum();		// 2
// //fn();		// fn is not a function
// // => 匿名函数之函数表达式
// var fn = function(){
// 	console.log(1);
// } //=> 代码执行到此处会把函数赋值给FN
// =>普通的函数
// function sum(){
// 	console.log(2);
// }

// sum();		// 2
// fn();		// 1

// 真实项目中，尽量用函数表达式


// ### 条件判断下的变量提升
/*
 * 在当前作用域下，不管条件是否成立都要进行变量提升
 * => 带VAR的还是声明
 * => 带FUNCTION的在老板版浏览器渲染机制下，声明+定义都处理，但是为了迎合ES6中的块级作用域，新版本浏览器对于函数（在条件判断中的函数），不管条件是否成立，都只是先声明，没有定义，类似于VAR。
*/
// console.log(a);  // undefined
// if (1===2) {
// 	var a = 12;
// }
// console.log(a);	 // undefined


/*
 * 变量提升； 》 在全局作用域下声明的全局变量也相当于给window设置了一个属性window.a = undefined
*/
// console.log(b);  // undefined
// if ('b' in window) {
// 	var b = 100;
// }
// console.log(b);	 // 100

// 面试题：
/*
 * 变量提升：无
 * 
*/

// f = function(){return true};  //window.f   (true)
// g = function(){return false};  //window.g
// ~function(){
// 	/*
//      * 变量提升
//      * function g;  //=>g是私有变量
// 	*/
// 	if(g() && []== ![]){  //g is not function（此时的g是undefined）
// 		f = function(){return false}
// 		function g(){return true}
// 	}
// }();
// console.log(f());
// console.log(g());

// /*
//  * 变量提升：
//  * function fn;
// */
// console.log(fn);  //undefined   
// if(1===1){
// 	// => 当条件成立，进入到判断体中，（在es6中它是一个块级作用域），第一件事并不是代码执行，而是类似于变量提升一样，先把FN声明和定义了，也就是判断体中代码执行之前，FN就已经赋值了。 
// 	console.log(fn);  // =>函数本身
// 	function fn(){
// 		console.log('ok');
// 	}
// }
// console.log(fn)   // =>函数本身



// ### 重名问题的处理
/*
 * 1.带VAR和FUNCTION关键字声明的相同的名字，这种也算是重名了（其中是一个FN，只是存储的类型不一样）
*/
// var fn = 12;
// function fn(){}

/*
 * 2.关于重名的处理：如果名字重复了，不会重新的声明，但是会重新的定义（重新赋值）【不管事变量提升还是代码执行皆是如此】
*/ 



// 面试题
/*
 * 变量提升：
 *  fn = 。。。（1）
 *     = 。。。（2）
 *     = 。。。（3）
 	   = 。。。（4）
*/

// fn();     //4
// function fn(){console.log(1);}
// fn();    // 4
// function fn(){console.log(2);}
// fn();    // 4
// var fn = 100;
// fn();    // 报错
// function fn(){console.log(3);}
// fn();
// function fn(){console.log(4);}




// ### ES6中let创建的变量不存在变量提升
/*
 * 在ES6中基于let或者CONST等方式创建变量或者函数，不存在变量提升机制
 * 
 * -> 切断了全局变量与WINDOW属性的映射机制
 * ->在
 * ->在相同的作用域中，基于LET不能声明相同名字的变量(不管用什么方式在当前作用域下声明了变量，再次使用let创建都会报错)
 * -> 虽然没有变量提升机制，但是在当前作用域代码自上而下执行之前，浏览器会做一件重复性检测，自上而下查找当前作用域下所有变量，一旦发现重复的，直接抛出异常，代码也不会执行了（虽然没有把变量提前声明定义，但是浏览器已经记住了当前作用域下有那些变量）
 * /
*/

// console.log(a)  //a is not defined
// let a = 12;
// let fn = () => {};
// console.log(window.a)  // undefined
// console.log(a)

/*
let a = 12;  // Identifier 'a' has already been declared
var a = 13;
console.log(a);
*/

/*
虽然没有把变量提前声明定义，但是浏览器已经记住了当前作用域下有那些变量（重复检测）
a = 12;      //a is not defined;
console.log(a);
let a = 13;
comsole.log(a);
*/ 


// let a = 10,b = 10;
// let fn = function () {
// 	//console.log(a,b)  // a is not defined
// 	let a = b = 20;
	
//      * let a = 10
//      * b = 20  // =》 把全局中的b=20 
	
// 	console.log(a,b)  // 20，20
// }
// fn()
// console.log(a,b)	// 10，20


// js 暂时性死区
// var a = 12;
// var b = 13;
// if(true){
// 	console.log(a);//a is not defined
// 	let a = 13;  //基于let创建变量，会把大部分{}当做一个私有的块级作用域（类似于函数的私有作用域），在这里也是重新检测语法和规范，看一下式否式基于新语法创建的变量，如果是按照新语法规范来解析
// 	console.log(b) //13
// }



/*
老版本 - 没有声明，不会报错
console.log(typeof a);  // "undefined"，在原有浏览器渲染机制下，基于typeof等逻辑运算符检测一个未声明过的变量，不会报错，返回UNDEFINED
*/ 

/*
es6解决了暂时性死区的问题
console.log(typeof a) // a is not defined
let a;  //=> 如果当前变量是基于es6语法创建的，在没有声明这个变量的时候，使用typeof检测会直接报错，不会是undefined，解决了原有的js死区
*/







