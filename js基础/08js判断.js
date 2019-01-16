// js中的判断操作语句

/*
 * if/else/else if
*/ 
{
	let num = 12;
	if(num > 10){
		num++  //=> num = num + 1 =>num+=1 在自身基础上+1
	}else if(num>=0&&num<=10){
		num--  //=> num = num - 1 =>num-=1 在自身基础上-1
	}else{
		num+=2
	}
	console.log(num)
}
{
	let num = 10;  //只要有一个条件成立，后面是否存在还有成立的条件，都不判断执行了
	if(num>5){
		num+=2
	}else if(num>8){
		num+=3
	}else{
		num+=4
	}
	console.log(num)  //2
}

// 关于条件可以怎么写？
{
	let num = 10;
	if(num>=10){}
	if(num==10){}
	if(num<-10){}
	if(0){
		// 不管你在条件判断中写什么，最后总要返回ture或者false来判断条件是否成立（把其他类型的值转换为布尔值，只有0/""/undefined/NaN/null是false，其余的都是ture）。
	}  
	if('3px'+3){
		// '3px'+3 = '3px3'  ('3px'/3 = NaN)  ('3px'*3=NaN) ('3px'-3=NaN)
		// 在js中，+ - * /都是数学运算,除+以外,其余运算符在运算的时候,如果遇到非数字类型的值,首先会转换为数字类型(Number),然后再进行运算
		// + 在js中除了数学相加,还有字符串拼接的作用(如果运算中遇到了字符串,则为字符串拼接,而不是数学相加)
	}  
	
}

{
	// BAT面试题
	var num = parseInt('width:35.5px')  //num = NaN
	if(num == 35.5){
		alert(0)
	}else if(num==35){
		alert(1)
	}else if(num==NaN){			// NaN不等域任何，包括它本身
		alert(2);
	}else if(typeof num=='number'){  //typeof NaN = 'number'
		alert(3)  // alert()返回字符串  
	}else{
		alert(4)
	}
	// 答案：字符串3
}

/*
 * 三元运算符
 * 语法: 条件?成立做的事情:不成立做的事情
*/ 
var a = 10;
a>10?a++:null;
a<10?(num++,num*10):null;

// 思考题(把下面代码改成三元运算符)
var num = 12
if(num<10){
	if(num>0){
		num++
	}else{
		num--
	}
}else{
	if(num==0){
		num++
		num=num/10
	}
}
var num = 12
num<10?(num>0?(num++):(num--)):(num==0?(num++,num=num/10):"")


/*
 * switch case 应用于变量（或者表达式）在不同情况下的不同操作，每一种case结束后都要加break（结束整个判断)
 *注意：传入的值分类型，比如字符串和数字
 *不加break，后面的条件不管是否成立，都会被执行；利用此机制，我们可以完成一些特殊的处理
 * 语法
 	switch(num){
		case 0:
			return "aaa"
			break
		default:
			return ""
			break
 	}
*/ 

if(num == 10){
	num++
}else if(num ==5){
	num--
}else{
	num=0
}
switch(num){
	case 10: //(每一个case都是===)
		num++;
		break;
	case 5:
		num--;
		break;
	case 0:
	case '0':
		num = 10;
	default:
		num = 0;
		break;
}

//'10' == 10
// => true 相等比较，如果等号左右两遍的类型不一样，首先会转换一样的数据类型，然后在进行比较
// 当前案例中，就是把字符串'10'转换为数字，然后在进行比较的

//'10' === 10
// => 绝对比较，如果两边的数据类型不一样，则直接不相等，他要求类型和值都完全一样才会相等（真实项目中为了保证代码的严谨性，我们应该更多使用绝对比较）







// typeof 在js中用来检测数据类型的方式之一,除了它以外还有
// typeof
	// 语法: typeof [value]  检测value的数据类型
	typeof 12   //'number'
	typeof NaN  //'number'

	typeof function(){}  //'function'

	typeof true  //Bollean
	typeof 'str' // 'string'
	typeof undefined // undefined
	typeof null // 'object' 因为null代表空对象指针（没有指向任何的内存空间）

	typeof []  //'object'
	typeof {}  //'object'
	typeof /^&/  //'object'
	// typeof检测数组/正则/对象，最后返回的都是"object",也就是基于这种方式无法细分对象


// instanceof
// constructor
// Object.prototype.toSting.call()


// n++ 和 n=n+1一样吗？
var n = 10;
var m = '10'
n++;    //11   这种情况还是数学运算
n=n+1;	//11
m++;    //11
m=m+1   //'101'
console.log(n)