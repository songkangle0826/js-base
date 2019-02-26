
// 1

/*
 * 变量提升 不管条件是否成立，都先变量提升
 	var m; 基于VAR声明全局变量，也相当于给WINDOW设置了一个属性window.mundefined
 	(es6中基于LET声明的全局变量和WINDOW没啥关系)
*/
if ('m' in window) { 
	// a && b，如果a存在，则返回b，否则返回a
	var m = m && 12; // m = undefined && 12
	// && 
}
console.log(m)    //undefined


// 2

//=》所以的JS代码执行之前，浏览器都会进行词法检测和分析，其中有一件事情就是查看当前变量是基于哪种规范声明的
let n = 10;  //=> window.n => window下没有n这个属性
if(!('n' in window)){  //条件成立
	/*
		此法分析（不是提前声明）
		let n
			1，当前变量n是块级作用域的私有变量
			2. n是基于规范创建的（不会提前进行变量提升）
	*/
	//1.let会产生块级私有作用域
	let n = n + 30;  //=》 let n = 12赋值操作是先准备值，然后再声明变量，再给变量赋值
	// (n是基于es6规范创建的，在当前块级作用域中的n还没有声明，所以直接报错)
}
console.log(n)   //报错


// 3
let n = 10,
	m = 20;
~function (n,m){
	/*
 	 * 形参赋值
 	 * n=20 m=undefined [私] ARG【0：20，length：1】

 	 	非严格模式下，形参和ARG存在映射机制
 	 		n -》 arg[0]
 	 		m -> arg[1] 此时ARG中没有第二项，所以m无法与ARG建立映射
	*/
	let arg = arguments;
	arg[0] = n || 100;
	arg[1] = m || 200;      //=>arg:[0:20,1:200...]即使加了一个索引，和M也没有关系，因为开始的时候并没有构建除映射机制
	console.log(n,m)	//20/undefined
}(m);	//把全局下m的赋值给
console.log(n,m)		//10/20



// 4

let ary = [12,23,34,45] 
//=> ary= aaafff000
/*
 {
	0: 12
	1: 23
	2: 34
	3: 45
	length: 4
	__proto__:Array.prottotype	
 }
*/
(function(ary){
	/*
		形参赋值
		ary = aaafff000 [私]
	*/
	ary.pop();				//删除最后一下
	ary = ary.slice(0);		//把原有的空间克隆一份一模一样的新的	bbbfff000
	/*
	 {
		0: 12
		1: 23
		2: 34
		length: 3
		__proto__:Array.prottotype
	 }  
	 此时的ary指向bbbfff000
	*/
	ary.shift();			//删除第一项
	console.log(ary);		//[23,34]	
})(ary)  //把全局的ary的值（空间地址）传进去赋值给ary
console.log(ary);	//[12.23,34]




// 5
var n = 10,
	fn = function () {
		this.n *= 2;
		n++
		return function (m){
			n += ++m
			console.log(n)
		}
	}

var f = fn(2);
f(3);			// 5
fn(3)(4);		// 16
f(4);			// 21
console.log(n)	// 21



let i = 2;
let fn = function (n){
	i *= 2;
	return function(m){
		i -= (n--) + (++m)
		console.log(i)
	}
}
let f = fn(1);
f(2);		//0
fn(3)(4);	//-8
f(5);		//-14
consol.log(i)	//-14



// 6
// let声明的变量和window属性没有关系
let n = 1;
let x = {
	n: 2,
	y: (function(n){
		n = n || 3;
		return function (m){
			m = m || 4;
			this.n =+ m++;
			n += ++m;
			console.log(n);
		}
	})(window.n)  // 把window下n这个属性n赋值给私有变量n（window中没有n属性，所以传递的n为undefined）
};
let z = x.y;
x.y(5);				//10
z(6);				//18
console.log(n, x.n, window.n)	//1 7 NaN


let n = 1,
	obj = { n: 2 };
let fn = obj.fn = (function(){
	this.n += n;
	n *= 2;
	return function(m){
		n -= 5 + (++m);
		this.n += n--;
		console.log(n)
	}
})(obj.n);
fn(3);
obj.fn(4);
console.log(n, obj.n, window.n)




// 7
let a = { n: 4 };
let b = a;
// =>a=AAAFF000 b=AAAFFF000 => {n:4,x:AAAFFF111}
b.x = a = { n: 10 };
// => AAAFFF111 => {n:10}
// =>b.x = AAAFFF111 a=AAAFFF111
console.log(a.x); //undefined	
console.log(b.x); //{n:10}



// 8
function C1(name){	//name都是undefined
	if(name) this.name = name;  //没有给实例this设置私有属性
}
function C2(name){	//name都是undefined
	this.name = name    //给实例this设置是由属性undefied
}
function C3(name){	//name都是undefined
	this.name = name || 'join';		给实例this设置私有属性name:join
}

C1.prototype.name = 'Tom';
C2.prototype.name = 'Tom';
C3.prototype.name = 'Tom';
alert(new C1().name + new C2().name + new C3().name) //"Tomundefinedjoin"






// 9

let Fn = function(x=0,y=0){
	this.x = x;
	this.y = y;
	this.getX = function(){
		console.log(this.x);
	}
}
Fn.prototype.getY = function(){
	console.log(this.y)
}
Fn.prototype = {
	setX: function(val){
		this.x = val
	}
	getX: function(){
		console.log(this.x)
	}
}
let f1 = new Fn;
let f2 = new Fn(1,2);

console.log(f1.constructor)   //Object 
f1.setX(3);  //this:f1  this.x = 3 (把f1的私有属性改为3)
f1.getX();   //this:f1  this.x=>3
f1.__proto__.getX();	//this:f1.__proto__  => this.x  undefined
f1.__proto__.setX(4);	//this:f1.__proto__  => f1.__proto__.x = 4给f1对应类的原型设置x属性4
f2.getX();	// this: f2  f2.x => 1
f2.__proto__.getX();	//this: f2.__proto__ => f2.__proto__.x => 4
f2.getY()    //undefined()  //报错


// 10
var a = 0;
function fun(){
	/*
 		形参赋值
 		变量提升
 			var a
	*/
	alert(a);
	var a = 10;
}
fun();		//undefined
alert(a);	//0


// 11
let a = 0,
	b = 0;
function A(a){
	A = function (b) {
		alert( a+ b++)
	}
	alert(a++)
}
A(1);  //1
A(2);  //4


// 12
(function(){
	let val = 1;
	let json = {
		val: 10,
		dbl: function(){
			val *= 2;
		}
	}
	json.dbl();
	alert(json.val+val)//12
})()


// 13
let test = (function(i){
	return function(){
		alert(i*=2);
	}
})(2)
test(5)   //4

// 14
