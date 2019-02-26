/*
 * 事件绑定
 	DOM0级事件绑定
 		box.onclick = function(){}

		每一个元素对象都是对应类的实例，浏览器天生为其设置了很多私有属性和公共属性方法，而onclick就是其中一个私有属性（事件类私有属性，还有很多其他的），这些属性默认值是null

		DOM0事件绑定原理: 就是给元素的某一个私有属性赋值（浏览器会建立监听机制，当我们触发元素的某个行为，浏览器会自己把属性中赋的值去执行）


 	DOM2事件绑定
 		box.addEventListener('click',function(){}.false)  移除使用的是removeEventListener （使用的方法都是EventTarget.prototype定义的）
		
		DOM2基于addEventListener完成事件绑定，是基于”事件池机制“完成的（详情见图（addEventListener执行机制））


		浏览器只有一个事件池
		序号  元素  事件类型  方法  阶段
		1     box   click    fn1   冒泡阶段

		box.addEventListener('click',fn1,false);//false冒泡阶段 true捕获阶段

 		在IE低版本浏览器中使用的是attachEvent来处理的：box.attachEvent('onclick',function(){})  移除使用的是 dettachEvent


 		1.DOM2事件绑定可以给当前元素的某一个事件行为绑定多个”不同的方法“


*/

// DOM0事件绑定，只允许给当前元素的某个事件行为绑定一个方法，多次绑定，后面绑定的内容会替代前面绑定的，以最后一次绑定的方法为主。
// box.onclick = function(){
// 	console.log(1)
// }
// box.onclick = function(){
// 	console.log(2)  //触发点击事件行为，只输出2
// }

// box.addEventListener('click',function(){
// 	console.log(1)
// },false)
// box.addEventListener('click',function(){
// 	console.log(1)
// },false)

/*
function fn1(){console.log(1)}
function fn2(){console.log(2)}
function fn3(){console.log(3)}
function fn4(ev){
	console.log(this,ev)
	console.log(4)
	box.removeEventListener('click',fn5)
	box.removeEventListener('click',fn8)
}
function fn5(){console.log(5)}
function fn6(){console.log(6)}
function fn7(){console.log(7)}
function fn8(){console.log(8)}
function fn9(){console.log(9)}
function fn10(){console.log(10)}
function fn11(){console.log(11)}
function fn12(){console.log(12)}

box.addEventListener('click',fn1);
box.addEventListener('click',fn3);
box.addEventListener('click',fn5);
box.addEventListener('click',fn7);
box.addEventListener('click',fn9);
box.addEventListener('click',fn2);
box.addEventListener('click',fn2);
box.addEventListener('mouseenter',fn2); //增加到事件池中的
box.addEventListener('click',fn4);
box.addEventListener('click',fn6);
box.addEventListener('click',fn8);
box.addEventListener('click',fn10);
box.addEventListener('click',fn11);
box.addEventListener('click',fn12);
*/


/*
 * DOM2事件绑定的兼容
 *  【谷歌 VS IE高版本】
 *  在移除事件绑定的时候，如果移除操作发生在正要执行的方法之前（例如：店家的时候，正要执行FN，但是在执行FN4的时候，我们把FN8从事件池移除了），谷歌下立即移除生效，第一次也不再执行FN8了，而IE是当前本次不生效，下一次店家才生效，第一次点击还是要执行FN8的
 *
 *
 *
 *
 *
 *  【标准 VS IE低版本】
 		标准： addEventListener  / removeEventListener
 		IE低版本： attachEvent / detachEvent
 		标准用的是行为名称” click“： 而IE低版本使用时前面要加on”onclick“

 		1.this问题
 			标准浏览器中，行为触发方法执行，方法中的this时当前元素本身，IE低版本中this指向了window
 		2.重复问题
 			标准浏览器中的事件池会默认去重的，同一个元素的同一个事件行为不能出现相同的绑定方法，但是IE低版本的事件池机制没有这么完善，不能默认去重，也就是可以给同个事件绑定相同的方法
 		3.顺序问题
 			标准浏览器是按照想事件池中存放分顺序依次执行的，而IE低版本时乱序的，没有规律
 		IE低版本浏览器出现的所有问题都是由于本身自带的事件池机制不完整导致的
*/ 