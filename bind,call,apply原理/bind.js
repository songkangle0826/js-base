let fn = function fn(x,y,ev){
	console.log(this,x,y);
	this.val = x + y;
	console.log(ev);
}

let obj = {
	name : '哈哈'
}


// document.body.onclick = fn; // => Fn中的THIS: BODY  x是事件对象 y是unfined

// 需求=> 触发BODy的点击事件,执行FN,但是需要让FN中的THIS是OBJ.并且给FN传递一个10&20,而且在FN中还需要得到事件对象

// document.body.onclick = fn.bind(obj,10,20);

// 基于FUNTION.PROTYPE上的BIND方法可以预先处理this,还可以给函数预先传递参数,而且还可以把事件对象等信息最后传递给函数....



// anonymous 匿名函数
// 在外层包裹一层匿名函数,就可以实现类似于BIND的效果,(因为BIND就是这样搞的)
/*
	document.body.onclick = function anonymous(ev){
		// => THIS: BODY EV:事件对象
		// 我们的需求是执行FN
		fn.call(obj,10,20,ev);
	};
*/


Function.prototype.myBind = function bind(context,...arg){
	// =>THIS: FN(当前需要处理的函数)
	// => CONTEXT: OBJ(需要把FN中的THIS改为谁就传递谁);
	// => ARG: 传递哥FN的实参(数组); [10,20]
	// 返回一个匿名函数
	/*
	 * 每次执行BIND,都形成一个不销毁的私有栈内存,返回一个新的匿名函数(每一次返回的不一样:不是相同的堆内存)
	 * 存储内容
	 * =>THIS: FN(当前需要处理的函数)
	 * => CONTEXT: OBJ(需要把FN中的THIS改为谁就传递谁);
	 * => ARG: 传递哥FN的实参(数组);	[ev]
	 *
	 * document.body.onclick = function anonymous(){  } 当我们触发BODY的点击行为,,执行的是返回的匿名函数
	*/ 
	let _this = this;
	console.log(_this);
	return function anonymous(...innerArg){
		// INNER-ARG: 可能幼稚,可能没有值,如果吧BIND返回的结果给元素的时间绑定,则事件触发,执行这个匿名函数,回吧事件对象传递进来
		// 最后的目的是吧FN执行,吧THIS改成OBJ,吧参数传递给FN即可
		_this.apply(context,arg.concat(innerArg))
	}

}
document.body.onclick = fn.myBind(obj,10,20); // 首先找到原型上的BIND,在BIND方法执行的时候,把FN中的信息进行预处理






// 柯理化函数编程思想









