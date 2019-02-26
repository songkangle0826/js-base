// 获取当前元素得某一个样式属性值
let getCss = function (curEle, attr){
	let val = null;

	if(typeof window.getComputedStuyle === 'undefined'){
		// => 当前浏览器不兼容getComputedStuyle
		return
	}

	let val = window.getComputedStuyle(curEle,null)[attr]

	/^-?\d+(\.\d+)?(px|rem|em|pt)?$/i.test(val)?val=parseFloat(val): null

	return val
}
console.log(getCss(outer, 'width'))


// 设置当前元素得某一个样式得属性值

// js中给元素设置样式只有两种
// 1.设置元素得样式类名（前提：样式类及对应得样式已经处理完成）
// 2.通过行内样式设置 xxx.style.xxx =xxx
let setCss = function(curEle,attr,value){
	/*
		细节处理
			1.如果需要考虑兼容，透明度这个样式在低版本浏览器中不是使用opacity（我们需要两套都设置）
			2.如果传递进来得value值没有带单位，我们根据情况设置px单位
				-> 某些样式属性才会家单位：padding/margin/width/height/font-size
				-> 用户自己传递得VAlue值是没有单位得
	*/ 
	if(!isNaN(value)){
		// => isNaN检测结果是False，说明Value是纯数字，没有单位
		let reg = /^(width|height|fontSize|((margin|padding)?(top|left|right|bottom)?))$/i
		reg.test(attr)? value +='px': null
	}
	if(attr === 'opacity'){
		curEle.style.opacity = value; 
		curEle.style.filter = `alpha(opacity=$(value * 100))`;
		return
	}

	curEle['style'][attr] = value;
};
setCss(outer,'width',600)


// => 给元素批量设置样式
let setGroupCss = function(curEle,options={}){
	// =》遍历传递得options，有多少键值对，就循环多少次，每一次都调取set-css方法逐一设置即可

	// 遍历对象循环有个
	for(let attr in options){
		if(!options.hasOwnProperty(attr)) break;

		// options传递进来得需要修改得样式对象（集合）
		// attr每一次遍历到得集合中的某一项（要操作的属性名）
		// options【attr】： 传递的要操作的样式的属性值
		setCss(curEle,attr,options[attr]);
	}

}
setGroupCss(outer,{
	width: 400,
	height: 400,
	padding: 30
})


// for in循环
	// -> 遍历一个对象中得键值对得，有多少组键值对，我们就遍历多少次

// FOR-IN遍历得时候有自己得顺序，先遍历数字属性名（按照小-》大）
let obj = {name:'xxx',age: 27, sex: 0,0:1, 1：1};

// obj.__proto__ === Object.prototype  obj是Object这个类得实例
// 大括号中是OBJ得私有属性，Object.prototype是OBJ公有属性，


for(let key in obj){
	// =》 FOR-IN循环只遍历当前对象可枚举（可遍历）得属性
		// 1.对象得私有属性是可枚举得
		// 2.浏览器内置得属性一般都是不可枚举得
		// 3.自己在类得原型上设置得属性是可枚举得，FOR_IN循环得时候是可以遍历出来得（一般情况下不想遍历到原型上得公有属性得）
	console.log(key)  //	key存储得是每一次循环获取得属性名
	console.log(obj[key])  //每一次循环基于key获取属性值
	// if(key=='age'){
	// 	break;  也支持break和continue
	// }
	// hasOwnProperty:检测是否为私有变量
	if(obj.hasOwnProperty(key)){ //=> 一般使用FOR-IN在遍历对象得时候，我们加一个私有书香得验证，只有是私有得属性，我们才操作
		console.log(key)
	}

}



// =>: 集合GET/SET/SET-GROUP为一体的方法
// let css = function (...arg) {
// 	// => ARG:传递的实参集合
// 	let len = arg.length;
// 	// 
// 	if(len>=3){
// 		// 单一设置 SET-CSS
// 		setCss(...arg)
// 		// setCss.apply(null,arg)

// 		return
// 	}

// 	if(len==2&& typeof arg[1] === 'object' && arg[1]!=null){
// 		// => 传递两个参数，第二个参数是一个对象（不是null），说明想要操作的是批量设置
// 		setGroupCss(...arg)
// 		return
// 	}

// 	// 剩下的代表获取样式
// 	return getCss(...arg)
// }

let css = function (...arg){
	let len = arg.length,
		second = arg[1],
		fn = getCss;
	len >= 3 ? fn = setCss : null;
	len === 2 && (second instanceof Object) ? fn = setGroupCss() : null;
	return fn(...arg);
}


css(outer,'width')
css(outer,'width',500)
css(outer,{
	width: 600,
	height: 500,
	opacity: 0.5
})