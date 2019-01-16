// For循环的基础运行机制
/*
 * FOR循环
 * 作用:按值一定的规律，重复去做某件事情，此时我们就需要使用循环了
 
 * for循环的语法组成
 * 1.定义初始值 var i = 0
 * 2.设定循环成立的条件（条件成立循环继续，不成立循环结束） i < ary.length
 * 3.条件成立会执行循环体 （大括号包裹的就是循环体）
 * 4.执行步长累加的操作 i++
 *
*/ 

var ary = [12,23,34];
/*
 *{
 * 0: 12
 * 1: 23
 * length: 3
 * }
*/ 

/*
 * 输出数组中的每一项内容
*/
// 正序输出
for(var i = 0;i < ary.length; i++){
	//=>第一次循环： i=0 i<3 ... i=1 =>ary[0]
	//=>第二次循环： i=1 i<3 ... i=2 =>ary[1]
	//=>第三次循环： i=2 i<3 ... i=3	=>ary[2]
	//=>第四次循环： i=3 i<3 循环结束（本次没有循环）
	console.log(ary[i]) 
}

console.log('---------------')

// 倒序输出
for(var i = ary.length-1; i>=0; i--){
	//=> i=2 ary[2]
	console.log(ary[i])
}

console.log('---------------')

// => 输出数组中的内容：输出基数项的内容
for(var i = ary.length-1; i>=0; i--){
	//=> i=2 ary[2]
	// 索引为偶数，代表奇数项
	// 索引为奇数，代表偶数项
	if(i%2==0){
		console.log(ary[i])
	}
}
for(var i = 0;i < ary.length; i+=2){
	console.log(ary[i]) 
}

// for循环的两个关键字
/*
 * 在FOR循环的循环体中，经常出现两个常用的关键字：
 * 1. continue: 继续(遇到continue结束本次循环，继续执行下一个循环)
 * 2. break 中断或者结束
*/ 
for(var i = 0;i < 10; i++){
	if(i<5){
		i++
		continue;  //=》结束本轮循环（continue后面的代码不在执行），继续执行下一轮循环
	}
	if(i>7){
		i += 2;
		break;	 //=>强制结束整个循环，不做任何事情得处理
	}
	i+=1
}

console.log('-----');

for(var i = 1;i<=10;i+=2){
	if(i<=5){
		i++;
		continue;
	}else{
		i-=2;
		break
	}
	i--;
	console.log(i)
}
console.log(i)  //5




