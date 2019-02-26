/*
 * 用来改变某一个函数中THIS关键字指向的
 *	CALL
 *
 *	APPLY
 *
 *	BIND
*/ 

// let 与 window没有关系
window.name = 'haha';
let fn = function () {
	console.log(this.name)
};
let obj = {
	name: 'OBJ',
	fn: fn
};
// fn();    //=>this: window    "haha"
// Obj.fn   //=>this: obj 		 "OBJ"

let oo = { name: "OO" };


/*
 * call语法
 * 1. [fn].call([this],[param]...)
 *	
 	fn.call;  //当前实例FN(函数FN)通过原型链的查找机制，找到FUNCTION.prototype上的call方法  => function call() { [native code]}; 
 	fn.call();  把找到的call方法执行

	当call方法执行的时候，内部处理了一些事情
		=> 首先把要操作的函数中的this关键字变为CALL方法第一个传递的实参值
		=> 把CALL方法第二个及第二个以后的实参获取到
		=> 把要操作的函数执行，并且把第二个以后的传递进来的实参值传递给函数

 * 
*/ 
fn.call(oo)					//=> this: oo    "OO"
fn.call(obj,10,20,30)		//=> this: obj   "OBJ"
//fn.call   //先找到FUNCTION原型上的方法


/*Function.prototype.call = function (){
	let param1 = arguments[0],
		paramOther = [];  //=>把arg除了第一个以外的实参获取到

	// => this: fn 当前要操作的函数(函数类的一个实例)

	// 把FN中的THIS关键字修改为PARAM1   =》把THIS（CALL中）的this关键字修改为param1



	// => 把fn执行，把paramOther分别传递给fn
	// this(paramOther)  => fn(paramOther)

}

fn.call({name:'xxx'});
sum.call({...})*/


let sum = function (a,b) {
	console.log(this);   // => opt
}
let opt = {n:20};

sum.call(opt,20,30); //call 执行 call中的this事sum 把this（call中的）中的“this”关键字改成opt 把this(call中的)执行，把20，30分别传递给它 // sum / this: opt a=20 b=30


sum.call.call(opt)
	// 1.sum.call 找到Function.prototype上的call方法（也是一个函数，也是函数类的一个实例，也可以继续调用call/apply等方法） =》A
	// 2.A.call(opt) 继续找到原型上的call方法，把call方法执行：把A中的this关键字修改为opt，然后把A执行


// 面试题1


/*
 Function.prototype.call = function callAA(){
	// => 1.把THIS（FN）中的”this关键字“修改为第一个参数值（OBJ）
	// => 2.把THIS（FN）执行，把第二个及以后接受的参数值传递给函数（10，20）
 	// this(10,20)
 }
 fn.call(obj，10，20);
*/
 



function fn1(){
	console.log(1);
}
function fn2(){
	console.log(2)
}

fn1.call(fn2);  	  //1	
// 找到CALL-AA把它执行，CALL中的this是FN1，第一个参数传递的是FN2， =》 在CALL-AA中执行的是FN1   // 1

fn1.call.call(fn2);    //2
// => 找到CALL-AA让它执行，CALL—AA中的THIS是FN1.CALL,第一个参数是FN2 （把FN1.call中的THIS变为FN2，再让FN1.call执行  =》 先找到CALL-AA，把它执行，只不过此时中的this是FN2 =》 让FN2中的this变为undefined，因为执行发FN1.call的时候没有传递参数，然后FN2执行）


Function.prototype.call(fn1);
// 先找到CALL-AA，它中的this是Function。prototype => 让F.p中的this变为fn1，然后让F.P执行，F.P是一个匿名函数，执行没有任何的输出

Function.prototype.call.call(fn1);
// 先找到CALL-AA把它执行，它中的THIS是F.P。call中的this修改为FN1.让F.P.call执行,F.P.Call(CALL-AA),第二次把它执行（此时它里面的this已经是FN1）
// =》这一次其实CALL-AA是让FN1执行

// fn.1.call === Function.prototype.call  // true

// => fn1.call.call.call.call.call.call === Function.prototype.call  // true









{

window.name = 'haha';
let fn = function (a,b) {
	console.log(this,a,b)
};
let obj = {
	name: 'OBJ',
	fn: fn
};

/*
 call中的习杰
 	1.非严格模式下，如果参数不传，或者第一个传递的是null/undefined。this都是指向window
 	2.在严格模式下，第一个参数是谁，this就指向谁（包括null/undeined）。不传this就是undefined
*/ 


fn.call(obj,10,20)   // this:obj  a=10 b=20
fn.call(10,20)		 // this:10   a=20 b=undefined
fn.call();			 // this:window a=undefined b=undefined
fn.call(null);		 // this:window
fn.call(undefined)	 // this: windwo
}





{
	/*
		apply： 和call基本上一模一样，唯一区别在于传参方式
			fn.call(obj,10,20)
			fn.apply(obj,[10,20])  //apply把需要传递给FN的参数放到一个数组（或者类数组）中传递进去，虽然写的是一个数组，但是也相当于给FN一个个传递
	*/ 
}



{
	/*
		bind： 语法和call一模一样，唯一的区别在于执行在于立即执行还是等待执行
			fn.call(obj,10,20)  //改变fn中的this，并且把FN立即执行
			fn.bind(obj,10,20)	//改变FN中的this，此时的FN并没有执行（不兼容IE6-8）
	*/ 
}




// 需求
let fn = function (a,b) {
	console.log(this,a,b)
};
let obj = {
	name: 'OBJ',
	fn: fn
};
document.onclick = fn;	  //把FN绑定给点击事件，点击的时候执行FN
document.onclick = fn();  //在绑定的时候，先把FN执行，把执行的返回（undefined）绑定给事件，当点击的时候执行的是undefined


//需求：点击的时候执行FN，让FN中的this是Obj
// document.onclick = fn;   //=> this: document

document.onclick = fn.call(obj);  //虽然this确实改为obj了，但是绑定的时候就把FN执行了（Call时立即执行函数），点击的时候执行的是fn的返回值
document.onclick = fn.bind(obj);  //bind属于fn中的this预处理obj，此时fn没有执行，当点击的时候才会执行fn执行








/*
	需求一: 获取数组中的最大值(最小值)
		1. 给数组先排序(由大到小排序),第一项就是最大值
		2.假设法: 假设第一个值是最大值,依次遍历数组中后面的每一项,和假设的值进行比较,如果比假设的值要大,把当前项赋值给MAX
		3.基于Math.max完成
*/

let ary = [12,1,14,23,13,15,56];


// 排序
let max = ary.sort(function(a,b){
	return b-a;
})[0];
console.log(max)	//56

// 假设法
let max = ary[0];
for(let i = 1;i<ary.length;i++){
	let item = ary[i];
	if(item>max){
		max=item
	}
}
console.log(max)

// => Math.max
console.log(Math.max(ary))  //NAN Math.max是获取一堆数中的最大值,我们需要把我们比较的数,一个一个的传递给这个方法

eval("Math.max("+ary.toString()+")")

// =>利用APPLY的一个特征,虽然放飞是一个数组,但是执行方法的时候,也是把数组中的每一项一个一个的传递给max方法
Math.max.apply(null, ary)

// 基于es6中得展开运算符完成
Math.max(...ary)


var arr = [11,12,13];
var max = Function.prototype.apply.call(Math.max,null,arr);  //13
/*
 解析
 	call(Math.max)把apply的this改变成了Math.max
 	apply(null,arr) 把this指向null,把apply中的this(Math.max)执行.arr传递进来,利用apply的特证,虽然传的是一个数组,但是方法执行的时候,也是把数组中的每一项一个一个的传递给max方法
*/ 

/*
[12,13,14].toString() => "12,13,14";
eval("12,13,14")
	1.eval:把字符串转换为js表达式
		eval("1+2")
	2.括号表达式(小括号应用)
		用小括号包起来,里面由很多项(有一项用逗号分隔开),最后只获取最后一项的内容(但是会把其他的项过一遍)

		(function(){
			console.log(1)
		},function(){
			console.log(2)
		})();
		=> 2
		
		let a=1 === 1?(12,23,14):null
		=> a = 14

		不建议大家过多使用括号表达式,因为会改变THIS
*/
let fn = function(){console.log(this)}
let obj = {fn:fn};

(fn,obj.fn)();  //执行的是第二个OBJ.FN,但是方法中的this是window而不是obj
(obj.fn)(); //this:obj

