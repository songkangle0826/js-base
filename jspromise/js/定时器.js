/*
 * 定时器: 设定一个定时器，并且设定了等待时间，当到达执行的时间，浏览器会把对应得方法执行
 *
 * 【常用得定时器】
 * 	setTimeout([function],[interval])： 执行一次的定时器
 * 	setInterval([function],[interval])： 可执行多次的定时器
 * 		[function]: 到达时间后执行得方法（设置定时器得时候方法没有执行，到时候浏览器帮我们执行）
 		[interval]: 时间因子（需要等待得时间 MS）
 * 	
 * 1.设置定时器会有一个返回值，这个值是一个数字，属于定时器的编号，代表当前是第几个定时器（不管基于setTimeout还是setInterval创建定时器，这个编号回累加）
 * clearTimeout([序号])/clearInterval([序号]):根据序号清除浏览器中设定的定时器
*/

// 执行一次
/*let count = 0;
setTimeout(()=>{
	count++;
	console.log(count);
},1000)
*/

// =》 轮循定时器，每间隔INTERVAL这么长时间，都会把设定的方法重新执行一次，知道定时器被清除
let count = 0;
let timer = setInterval(()=>{
	count++;
	console.log(count);
	if(count===10){
		// 清除定时器
		// clearInterval(timer)
		clearTimeout(timer)
	}
},1000);
// console.log(timer)  //1

// 清除定时器 
// => clearTimeout / clearInterval: 这两个方法中任何一个都可以清楚用任何方法创建的定时器