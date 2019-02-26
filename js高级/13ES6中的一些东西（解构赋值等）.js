/*
 * 解构赋值： 按照一个数据值的解构，快速解析获取到其中的内容
 	1.真实项目中一般是针对于数组或者对象进行解构赋值
*/ 


let value = {name：'xxx',age: 25, score: [12,23,34,45]};
// a = 'xxx'
// b = 12
// c = [23,34,45]

let {name:a,score:[b,...c]} = value





// ==========================对象的解构赋值
let obj = {
	name: 'xxx',
	age: 25,
	sex: 0
}
let { name,age,sex }  = obj  //对象解构赋值默认情况下要求：左侧变量名和对象中的属性名一直才可以

let { sex } = obj

let { name: nameAA } = obj;
console.log(nameAA)

let { firend:firendAA } = obj
console.log(firendAA)

let { firend = 0 } = obj
console.log(friend)


let fn = function({
	name:'haha',
	age:0
}={}){  //=>把传递的对象解构了（不传递值），给默认赋值为空对象：现在传递对象或者不传递，形参接收到的都是对象），解构的时候，可以把传递进来对象中，如果某个属性不存在，我们赋值默认值

}

fn({
	name: 'xxx',
	age:25
})



// ==========================数组解构赋值
let a = 12;
	b = 13;

// a,b互换位置
let c = a;
a = b;
b = c;

a = a+b;
b = a-b;
a = a-b

[a,b] = [b,a]




let ary = [12, 23, 34];

// => 需求： 获取第一项,把剩下的项作为一个数组返回
let [a, ...b] = ary;
console.log(a,b)  //=>12 [23,34]   ...在此次称之为剩余运算符，除了前面以外的项，都放到一公分数组中

let [a,...b,c] = ary; //报错Uncaught SyntaxError: Rest element must be last element


let [a,b,c] = ary;  // 让等号左边出现和右边相同的数据解构，左边可以创建一些变量快速获取到右侧对应位置的值（解构赋值）
console.log(a,b,c)


let [a] = ary;
console.log(a);  //=>12

let [ , , c] = ary;
console.log(c)	//=>34

let [a,,c] = ary;
console.log(a,c);  //=> 12 34




let ary = [12];
let [a,b = 0] = ary;  //=》在解构的时候可以给变量设置默认值，如果当前变量对应解构中的这一项没有值，变量用默认值
console.log(a,b)	  //=》 12 0




// 三个点 ...
/*
 * "..."在ES6中有三个含义
 	1.剩余运算符
 	2.拓展运算符
 	3.展开运算符 ：把
*/ 

let ary = [12,23,34];
let [...arg] = ary;  //数组克隆//ary.slice(0);

function fn(context,...arg){
	// 获取传递值中的第一个和剩下的
	console.log(context,arg)  // arg是一个数组，arguments是类数组
}
fn(obj,10,20,30)


function sum(...arg){
	// => 传递几个实参，ARG中就存储多少个，此时的ARG和ARGUMENTS一样的，区别就是ARG是一个数组，ARGUMENT是哟个类数组
}


let ary = [12,23,34];
Math.max(...ary)  //=》Math.max(12,23,34);

let fn = function (a,b,c){
	console.log(a,b,c)		//12,23,34 
} 
fn(...ary)  //把数组中的每一项分别传递给一个函数，此时我们使用展开运算符把数组展开即可


let obj = { name: 'xxx', age: 20}
let newObj = { ...obj, sex: 0 }  //把原有对象展开（克隆）放到新队形中
newObj === obj // false 




/*
 * 编写一个方法fn，实现任意数求平均数（去重数字中的最大和最小，然后再算平均数）
*/ 
let fn = function () {
	// => arguments: 类数组（不能直接调取数组原型上的方法）
	// 1.先给ARGUMENTs排序（不能直接使用sort方法），把排序后的值去掉首位（干掉最大值和最小值）
	// 2.把剩下的值求和，除以总长度，求出平均数即可

	// 把ARG类数组转换为数组ARY

	/*
	// => 把ARG类数组转换我数组ARY（把类数组克隆一份一模一样的，最后存储到数组中） =》 数组的SLICE可以实现克隆的
	let ary = [];
	for(let i =0;i<arguments.length;i++){
		ary.push(arguments[i])
	}*/

	// 把内置的SLICE方法执行， Array.prototype.slice()

	let ary = [].clice.call(arguments); //=>类数组借用数组原型上的方法执行，实现相关的操作（借用SLICE实现类数组转换数组），前提： 类数组和数组类似，都有length和索引（字符串也符合这个前提，所以也可以这样）



	[].sort.call(arguments,function(a,b){
		return a-b
	})  // 借用sort给arg排序，除此之外其他的很多数组的方法都可以呗ARG借用

 			


	// => 给ARY排序，去除首位，然后再求和，最后平均
	ary.sort(function(a,b){
		return a-b
	}).pop();
	ary.shift();

	let total = eval(ary.join('+'));


	return (eval(ary.join('+'))/ary.length).toFixed(2);

	// for(let i=0;ary.length;i++){
	// 	total += ary[i]
	// }
	// return (total/ ary.length).toFixed(2);
}

fn(10,9.8,9.5,8.8,8,9.2)




// =》 重写数组的SLICE方法，实现：ary.slice(0)相当于把ARY克隆一份新数组
Array.prototype.mySlice = function () {
	//=> 把操作的数组ARY克隆一份
	// => this: ary
	// => 内置的SLICE实现数组克隆的代码
	var newAry = [];
	for(let i = 0;i<this.length;i++){
		newAry.push(this[i]);
	}


	// 如果我们把内置的SLICE执行，并且让方法中的THIS指向ARGUMENTS，就相当于ARG转换为
	/*
		let ary = [];
		for(let i =0;i<arguments.length;i++){
			ary.push(arguments[i])
		}
		//=>把ARG这个类数组转换围殴数组
	*/

	return newAry
};
let ary = [12,23,34];
let newAry = ary.mySlice();   //=>[12,23,34];




let fn = function (...ary){
	// let ary = [...arguments];		//把类数组转换为数组
	// let ary = Array.from(arguments);//把类数组转换围殴数组
	// let ary = [].slice.call(arguments, 0); //把类数组转换围殴数组
	ary.sort(function(a,b){
		return a - b;
	}).pop();
	ary.shift();
	return (eval(ary.join('+'))/ ary.length).toFixed(2);
}

fn(10,9.8,9.5,8.8,8,9.2)




// ========================== 【箭头函数】

let fn = function(x,y){}
fn(10,20)

let fn = (x,y) => {}
fn(10,20)

let fn = x =>{
	// 只有一个参数，我们可以省略小括号
}
fn(10)

let fn = function(x,y){
	return x+y
}
let fn = (x,y) => x+y; //如果函数体中只有一句话，并且世界级return的，我们可以省略大括号（给形参设置默认值）


let fn = x => y =>x+y

/*
 var fn = function fn(x){
	return function(y){
		return x+y 
	}
 }
*/


// 1.箭头函数中没有arguments
let fn = (...arg) => {
	console.log(arguments)  //报错
	console.log(arg);  //可以借用剩余运算符代替，而且是一个数组
}
fn(10.20,30,40)

// 2.箭头函数中没有自己的执行主体（THIS），它的THIS都是继承上下文中的THIS
let obj = {
	fn: (function(){
		console.log(this)  // this:window
		let _this = this;
		return function(){
			console.log(this) 
			console.log(_this) //_thi只是一个变量，不是私有的，找上级作用域中的
		}
		return ()=>{
			console.log(this)  //window
		}

	})()
}

obj.fn(); // this: window   //箭头函数和是否有点，点前面是谁都i没有关系了，因为他没有自己的执行主体，再箭头函数中使用到的THIS都是直接找上下文中的THIS来使用
obj.fn.call(window); //强制改成window
