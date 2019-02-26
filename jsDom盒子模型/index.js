// clientTop/Left/Width/Height

// 1.clientWidth & clientHeight :获取当前元素可视区域的宽高（内容得宽高+左右/上下Padding）
	// 和内容是否有溢出无关（和是否设置了overflow：hidden也无关），就是我们自己设定得内容宽高+padding


// 获取当前页面一屏幕（可视区域）得宽度和高度
// document.docuemntElement.clientWidth || document.body.clientWidth
// document.docuemntElement.clientHeight || docuemnt.body.clientHeight

// 2.clientTop & clientLeft: 获取（上/左）边框得框架


// 3.offsetWidth & offsetHeight： 在client基础上加上border（和内容溢出也没有关系）


// 4.scrollWidth & scrollHeight : 真实内容得宽高（不一定是自己设定得值，因为可能会存在内容溢出，有内容溢出得情况下，需要把溢出得内容也算上）+左/上padding，而且是一个约等于得值（没有内容溢出和client一样）

	//=>在你不同浏览器中，或者是否设置了overflow：hidden都会对最后得结果产生影响，所以这个值仅仅做参考，属于约等于值


// 获取当前页面得真实高度（包含溢出）
// document.docuemntElement.scrollWidth || document.body.scrollWidth
// document.docuemntElement.scrollHeight || docuemnt.body.scrollHeight



// 通过js盒模型属性获取值得特点
// 1.获取得都是数字不带单位
// 2.获取得都是整数，没有小数（一般都会四舍五入，尤其是获取的偏移量）
// 3.获取的结果都是复合样式值（好几个元素的样式组合在一起的值），如果指向获取单一样式值（例如：只想获取padding），我们的盒子模型属性就操作不了了（这不是说没有用，真实项目中，有时候我们就是获取组合的值来完成一些操作）


// ==================【获取元素具体的某个样式值】
// 1.【元素】.style.xxx 操作获取
	// 》只能获取所有写在行内上的样式（不写在行内上，不管你写没有写都获取不到，真实项目中我们很少会把样式写在行内上）


// 2.获取当前元素所有经过浏览器计算的样式
	//》经过计算的样式，只要当前元素可以在页面中呈现（或者浏览器渲染它了），那么它的样式都是呗计算过的
	//=》不管当前样式写在哪
	// =》 不管你是否写了（浏览器会给元素设置一些默认样式）

// 标准浏览器（Ie9+）
// 	windoow.getComputedStyle([元素]，【伪类，一般都写null】)
// 	获取到当前元素所有呗浏览器计算过的样式（对象）

// ie6-8
// 	【元素】.currentStyle 获取经过计算过的样式



/*
 * getCss: 获取当前元素某一个样式值
 *
 *
 * @param
 * 	curEle[object]: 当前要操作得元素
 *	attr[object]: 
 *	@return 
 *		获取得样式属性值
*/
let getCss = function getCss(curEle,attr) {
	// 判断
	if('getComputedStyle' in window){
		let val = window.getComputedStyle(curEle,null)[attr];
		// => 把获取得结果去除当我（不是所有得值都能去单位得，例如display/一些复合值都去不掉单位），只有符合数字+单位这种模式得结果才能基于parse-Float去单位
		let reg = /^-?\d+(\.\d+)?(px|rem|em|pt)?$/i;
		reg.test(val) ? val = parseFloat(val) : null
		return val
	}
	throw new SyntaxError('您得浏览器版本过低，请升级到最新版本，谢谢配合');
}
let outer = document.getElementById('outer');
console.log(getCss(outer,'padding'))





/*
 *	offfsetParent 当前盒子的父级参照物
 *	offsetTop / offsetLeft: 获取当前盒子距离其父及参照的偏移量（上偏移/左偏移）
		当前盒子的外边框开始-》父级元素参照物的内边框
*/ 

// =>参照物：同一个平面中，元素的父级参照物和解构没有必然联系，默认他们的父级参照物都是body（当前平面最外层的盒子） BODY的父级参照物是null
// center.offsetParent   //body
// outer.offsetParent   //body
// inner.offsetParent   //body

// =》参照物是可以改变的: 构建出不同的平面即可（使用ZIndex，这个属性只对定位有作用），所有改变元素的定位（position:relative/absolute/fixed）可以改变其父级参照物
utils.css(outer,{
	position: 'relative'   // =》把outer脱离原有的平面，独立出一个新的平面，后代元素的父级参照物都会一它为参考
})

// 设置定位可以让当前元素脱离文档流




/*
 * scrollTop /scrollLeft : 滚动条卷去的高度和宽度
 *
 * 最小卷去值： 0；
 * 最大卷去值： 真实页面的高度 - 一屏幕的高度
 document.documentElement.scrollHeight - document.documentElement.clientHeight

 *
 * 在js盒子模型13个属性中,只有scrollTop/Left事"可读写"属性,其余都是"只读"属性
 *
 * 操作浏览器和盒子模型，我们一般都要写两套,用来兼容各种浏览器

*/ 