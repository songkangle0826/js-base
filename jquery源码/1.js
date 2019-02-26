/*
 * 类库,插件,UI组件,框架
 	1.类库: JQ/ZEPTO...  提供一些真实项目中常用的方法,任何项目都可以把类库导进来,调取里面的方法实现自己需要的业务逻辑

 	2.插件: 具备一定的业务功能,例如,我们可以封装轮播图插件,选项卡产检,模态框插件等,(插件规定了当前 这个功能的样式结构,把实现功能的JS进行封装,以后想实现这个功能直接导入插件即可)  swiper,iscroll, jquery-dialog /jquery-drag/jquery-datepicker/Echarts

 	3.UI组件: 把解构,css,JS全部都封装好了,我们想实现一个功能直接导入进来即可(偶尔需要我们修改一下) bootstarp...

 	4.框架: 具备一定的编程思想,要求我们按照他们的框架思想开发,一般框架中提供了常用的类库方法,提供了强大的功能插件,有的也提供了强大的UI组件React(React native) / Vue / Angular / BackBone / Sea.js / Require.js .... 
 *
 * 
 * JQuery(JQ) 非常优秀的JS"类库", 
 	> 基于原生JS封装的一个类库,提供了很大方法,而且这些方法事兼容所有浏览器的
 	> jQ版本
 		V1 (常用) 1.8.3  1.9.3  1.11.3
 		V2 (移动端的) - 去掉了兼容的
 		V3 
 	> 
 * 
 * 
*/ 


(function(){
	var version = '1.11.3',
		jQuery = function( selector, context ) {
			return new jQuery.fn.init( selector, context );  // 创建了init这个类的实例，也相当于床架了Jquery这个类的实例，（因为在后面的时候，让init.prototype = jQuery.prototype）
		};
	// jquery是一个类,在它 的原型上提供了很多的属性和方法,供JQ的实例调取使用
	jQuery.fn = jQuery.prototype = {
		jquery: version,
		constructor: jQuery,    //当前类的原型重定向后,自己开辟的堆内存中是没有constructor的,需要手动增加保证了它的完整性
		// ...
		filter: function(){

		}
	};
	// -> 给JQ原型上增加了EXTEND方法,同时把JQ当做一个普通对象,给这个对象设置了一个私有的方法
	/*
	 * JQ是一个类（也是一个普通对象）：函数的两种角色，Jquery是一个类库提供了很多方法，其中这些方法有两部分
	 	1.放到JQ原型上的（JQuery.fn/Jquery
	 	.prototype）,这里面的方法是供JQ实例调取使用的
	 	2.把jq当作一个普通的对象，在对象上设置一些私有的属性和方法，这类方法以后用的时候的时候直接的Jquery.xxx()执行即可
	*/ 
	jQuery.extend = jQuery.fn.extend = function(){
		/*
          EXTEND是把一个对象中的属性和方法扩展到指定对象上
		*/ 
	}
	jQuery.extend({
		isFunction: function(obj){

		},
		isArray: function(){

		},
	})
	jQuery.fn.extend({
		find: function(){}
	})

	// jQuery.prototype:{...,find:...}

	var init = jQuery.fn.init = function( selector, context ) {} 

	init.prototype = jQuery.fn //=>把init当作一个类，但是让这个类的原型指向了Jquery.prototype(init这个类的实例最后找到的也是Jquery这个类原型上的方法) =》 init的实例其实可以为JQuery的实例
	
	window.jQuery = window.$ = jQuery;
	
})()


$().filter() // 创建一个JQUEry类的实现，可以调取JQ.FN中的方法
jQuery()  

$.isFunction()  // 把JQ当作一个普通对象，直接的使用对象上扩展的那些私有属性和方法（这些方法和实例没关系）




// 
let Fn = function () {
	return new Fn.prototype.init();  //创建INIT的实例
};
let init = function () {

}
init.prototype = Fn.prototype;
let f = Fn(); // => 目的: 不加NEW 也能创建FN的实例




// 面试题
let Fn = function(){

}
Fn.prototype = {
	aa: function(){

	}
}
Fn().aa();