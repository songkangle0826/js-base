// 面向对象编程（Object Oriented Programming）
/*
 * 单例设计模式（Singleton Pattern）
 *	1.表现形式
 * 	var obj ={
 *	  xx: xxx,
 *	  ..
 *  }
 *	在单例设计模式中，OBJ不仅仅是对象名，他被称为”命名空间【NameSpace】“，把描述事务的属性存放到命名空间中，多个命名空间是独立分开的，互不冲突
 * 	2.作用
 *	 =》把描述同一件事务的属性的特征进行”分组，归类“（存储在同一个堆内存空间中），因此避免了全局变量之间的冲突和污染
 * var pattern1 = {name:'xxx'};
 * var pattern2 = {name:'xxx'};
 * 
 *
 *	3.单例设计模式命名的由来
 * 		=》每一个命名空间都是JS中OBJECT这个内置基类的实例，而实例之间 是相互独立互不干扰的，所以我们称他为"单例：单独的实例"
 *   
*/ 

/*
	var name = "";
	var age = 18;
	var sex = 'box';

	var name = "小龙女";
	var age = 81;
	var sex = "girl"
*/

/*
	var person1 = {
		name: '杨过',
		age: 18
	}
	var person2 = {
		name: '小龙女',
		age: 81
	}
*/


/*
 * 高级单例模式
 * 1.在给命名空间赋值的时候，不是直接赋值一个对象，而是先执行匿名函数，形成一个私有作用域AA（不销毁的栈内存），在AA中创建一个堆内存，把堆内存地址赋值给命名空间
 * 2.这种模式的好处：我们完全可以在AA中创造很多内容(变量OR函数)，哪些需要供外面调取使用，我们暴露到返回的对象（模块化实现的一种思想）
*/

/*
	var nameSpace = (function(){
		var n = 12;
		function fn(){
			//...
		}
		function sum(){
			//...
		}
		return {
			fn: fn,
			sum: sum
		}
	})()
*/


/*
	*this
		1.给当前元素的某个事件绑定方法，当事件触发方法钟的THIS是当前操作的元素对象
			oBox.onclick = function(){
				// this: oBox			
			}
		2. 普通函数执行，函数中的this取决于执行的主体，this就是谁（执行主体：方法执行，看方法名前面是否有”点“，有的话，点前面是谁this就是谁，没有this是window）
			function fn(){
				console.log(1) 
			}
			var obj = {aa:fn};	
			obj.aa(); // this:obj   
			fn()      // this:window
			~function (){
				//=> this:window 自执行函数执行，方法中的this是window
			}();
		3.
*/ 

var n = 2;
var obj = {
	n:3,
	fn:(function(n){
		n*=2;
		this.n+=2;   // window
		var n =5;
		return function(m){
			this.n*=2
			console.log(m+(++n));
		}
	})(n)
}
var fn = obj.fn;
fn(3)        //9
obj.fn(3);   //10
console.log(n,obj.n)  //8,6


/*
 * 模块化开发
 * 1.团队协作开发的时候，会把产品按照功能板块进行划分，每一个功能板块有专门负责人开发
 * 2.把各个板块之间公用的部门进行提取封装，后期在想实现这些功能，直接的调取引用即可（模块封装）
*/ 

var skipRender = (function(){
	var fn = function(){

	}
	//...
	return {
		init: function(){

		}
		fn: fn
	}
})()
skipRender.init();

var weatherRender= (function(){
	var fn = function(){

	};
	return {
		init: function(){
			fn(); //调取自己模块中的方法即可使用
			skipRender.fn()//=>调取别人模块中的方法

		}
	}
})()
weatherRender.init();
