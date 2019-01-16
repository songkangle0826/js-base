// 函数（function）
function fn1(n,m) {  //=>形参：入口
	// =>函数体
	var total = 0; // total: 私有变量
	total = n + m;
	console.log(total)
}

fn(10,20)   //=>实参：给形参传递的具体值
var a = 12;
fn(a,1===1?10:0)  //=》实参一定是值，即使我们写的变量或着表达式，也是把变量或者表达式计算的结果作为中传递给形参变量

// console.log(total)  //total是私有变量，我们无法在函数外面获取这个值（闭包）

// 函数执行的时候形成一个全新私有作用域（私有栈内存）,目的是：1，把原有堆内存中存储的字符串变为js表达式执行。2.保护里面的私有变量不受外界的干扰（和外界是隔离的）,我们把函数执行的这种保护机制，称之为”闭包“。


/*
 * 函数的入口： 形参
 * 函数的出口，返回值 return
 * 出口的作用：把函数运行的结果（或者函数体中的部分信息）拿到函数外面取使用
*/ 
function fn2(n,m) {  
	var total = 0; 
	total = n + m;
	return total;   //=>并不是把total变量返回，返回的是变量存储的值返回，return返回的永远是一个值
}
fn //=>代表的是函数本身
fn(10,20) //=>代表的是函数执行（不仅如此，他代表的是函数执行后，返回的结果（return返回的值））
var result = fn2(1,2);
console.log(result,1)  //=>3



function fn3(n,m){
	var total = 0;
	total = n + m;
	// return total;
}
var res = fn(100,200);
console.log(res);       //undefined


function fn(n,m){
	// =>如果n/m又一个没有传递值，我们返回零
	if(n===undefined || m===undefined){
		return 0; //=》 return还有一个作用，类型域循环中的break，能强制结束函数体中代码的执行（return后面的代码不在执行）
	}
	var total = 0;
	total = n + m;
	return total;
}
console.log(fn(10))


// n==undefined 经常这样判断n的值是否为undefined,这种方式可以
// n==undefined 这种模式不好，因为null==undefined也是相等的（===比较才不相等）
typeof n == 'undefined' // 真实项目中经常用这种方式


// total = 0;   0是有值的，从内存方面来说，会在栈内存中占一个位置
// total = null;  一般更喜欢用null作为初始值。null是空对象指针，是不占内存位置的。


// arguments  

/*
 * 任意数求和：不管函数执行的时候，传递多少实参进来，我们都可以求和
 * 
 * 形参是有局限性，我们需要具体知道用户执行的时候传递实参数量。。顺序等，才可以使用形参变量定义对应入口

 * arguments : 函数内置的实参集合（内置：函数天生就存在的机制，不管你是否设置了形参，也不管你是否传递了实参，ARGUMENTS都有，始终存在）；
*/ 

function sum1(n,m){
	console.log(arguments)
	console.log(arguments.callee == sum)  //true
 	// {
	// 	'0': 10,
	// 	'1': 20,
	//  length: 2,
	//  callee: 当前函数本身
	// }
	/*
	 * arguments它是一个类数组（不是数组，不能用数组里面的方法）
	 * 即使设置形参变量，形参变量该是什么值还是什么值，但是Arguments使用存储的是“所有”传毒进来的实参，所以他被称为“实参集合”
	*/ 
}

/* 把arguments的实参值依次遍历，每遍历一个都累计起来，最后实现任意数求和 */ 
// ES5写法
function sum2(){
	var total = null;
	for(var i = 0;i<arguments.length;i++){
		var item = arguments[i]
		total+= item;
	}
	return total;  //把结果返回
}
console.log(sum2(10,20,30))
console.log(sum2(10,20,30,40))


// =>升级：在累加的时候，把字符串转换为数字，对于一些非有效数字，不在相加
function sum(){
	var total = null;
	for(var i = 0;i<arguments.length;i++){
		var item = arguments[i];  
		// 1.不光ITEM获取的是传递的啥，都先转换为数字类型
		item = Number(item)
		isNaN(item)?null:total+=item
	}
	return total;  //把结果返回
}
console.log(sum(10,20,'30','AA',40,50))
console.log(sum(10,20,30,40))

// ES6写法
let sum = (...arg) =>{
	arg=arg.filter(item=>!isNaN(item));
	return eval(arg.join("+"))
}

console.log(sum(10,20,'30','AA',40,50))


/*
 * 实名函数：有函数名的
 * 匿名函数：没有函数名的
 *   -函数的表达式：把函数当作值赋值给变量或者元素的事件
 *   -自执行函数：创建和执行一起完成的
*/ 

// =》函数表达式
/*var fn = function(){

};
oBox.onclick= function(){

} */


// =>自执行函数
(function (i) {})(10);
~function () {}();
+function () {}();
!function () {}();