/*
 * 在js中,函数是一等公民,可以作为函数的返回值,也可以作为函数的参数
*/


// // 判断是否为字符
// function isString(params){
// 	return Object.prototype.toString.call(params) == '[object String]';
// }
// // 判断是否为数组
// function isArray(params){
// 	return Object.prototype.toString.call(params) == '[object Array]';
// }

// 函数可以作为返回值
function isType(type){
	return function(params){
		return Object.prototype.toString.call(params) == `[object ${type}]`;
	}
}

let isString = isType('String');
let isArray = isType('Array');
isString('123')
isArray([]);

// lodash after 指定一个函数被调用多少次才会真正执行

// 函数可以作为一个参数传到另一个函数里面
function eat(){
	console.log('吃完了');
}
function after(times,fn){
	let count = 0;
	return function(){
		if(++count == times){
			fn();
		}
	}
}
let newAfter = after(3,eat);
console.log(newAfter(),'1');
console.log(newAfter(),'2');
console.log(newAfter(),'3');




