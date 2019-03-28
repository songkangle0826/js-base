/*
 * 常用的算法
 * 	递归
 *	去重
 *  冒泡排序
 * 	插入排序
 *  快速排序
 *  时间复杂度
 *  空间复杂度
 *  KMP
 *	...
 */

// => 递归: 函数自己调用自己执行就是递归(递归是基于条件判断的，因为我们不能形成死递归，在某个条件下我们需要结束递归操作)
/* 
	function fn() {
 		fn();
  	}
  	fn();
  */

// 需求： 在1-100之间获取即是3也是5的倍数（也就是15的倍数）的和
/*
	let total = 0;
	for(ley i=1;i<=100;i++){
		if(i%15 === 0){
			total+=i;
		}
	}
 	*/
/*
	function fn(n){
		if(n>100){
			return 0;
		}
		if(n % 15 ===0){
			return n + fn(n+1);
		}
		return fn(n+1);
	}	
	fn(1);
 */


// 数组扁平化
let ary = [1,[2,[3,[4,5]]],6]   // => [1,2,3,4,5,6]

// JSON.parse(JSON.stringify(ary)); //实现深度克隆

/*
	let str = JSON.stringify(ary);
	str=str.replace(/\[|\]/g,'')
	ary = str.split(',');
*/

/*
	let str = JSON.stringify(ary);
	str = '['+str+']';
	ary = JSON.parse(str);
	*/

// 数组扁平化
let result = [],
	fn = function (ary){
		if (ary.length===0) return;
		for(let i = 0;i<ary.length;i++){
			let item = ary[i]
			if(typeof item === 'object'){
				fn(item);
			}else{
				result.push(item);
			}
		}
	}
fn(ary)
console.log(result);

