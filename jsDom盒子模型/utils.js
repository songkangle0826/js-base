// => 公共方法库： 项目中常用的一下一些方法，我们都封装到这里
let utils = (function(){
	// => 获取元素的样式
	let getCss = function (curEle, attr){
		let val = null;

		if(typeof window.getComputedStuyle === 'undefined'){
			// => 当前浏览器不兼容getComputedStuyle
			return
		}

		let val = window.getComputedStuyle(curEle,null)[attr]

		let reg = /^-?\d+(\.\d+)?(px|rem|em|pt)?$/i

		reg.test(val)?val=parseFloat(val): null

		return val
	}

	// 单个设置
	let setCss = function(curEle,attr,value){
		if(!isNaN(value)){
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

	// 批量设置元素样式
	let setGroupCss = function(curEle,options={}){
		for(let attr in options){
			if(!options.hasOwnProperty(attr)) break;
			setCss(curEle,attr,options[attr]);
		}

	}

	// css操作汇总
	let css = function (...arg){
		let len = arg.length,
			second = arg[1],
			fn = getCss;
		len >= 3 ? fn = setCss : null;
		len === 2 && (second instanceof Object) ? fn = setGroupCss : null;
		return fn(...arg);
	}


	// offset： 获取当前元素距离body的偏移（左偏移/上偏移）
	let offset = function (curEle) {
		// 1.先获取当前元素本身的左偏移
		let curLeft = curEle.offsetLeft;
		let curTop = curEle.offsetTop;
		let p = curEle.offsetParent;
		console.log(curLeft)

		// 2.累加父参照的边框和偏移（一直向上找，找到BODY为止，每当找到一个父参照都把它的边框和偏移量累加起来，根据元素不一样，具体找几次也不知道）
		while(p.tagName!=='BODY'){	//当找到的父参照物事BODY结束查找和累加操作
			// console.log(1)
			// 把找到的父参照物的边框和偏移累加起来
			curLeft += p.clientLeft;
			curLeft += p.offsetLeft;

			console.log(p.clientLeft, p.offsetLeft)

			// console.log(curLeft)

			curTop += p.clientTop;
			curTop += p.offsetTop;

			p = p.offsetParent; //基于当前找到父参照物继续向上查找
		}

		return {
			top: curTop,
			left: curLeft
		}

	};


	// => 关于操作浏览器盒子模型属性的
	let winHandle = function (attr, value) {
		if(typeof value !== 'undefined'){
			// => 设置盒子模型属性: scrollTop/Left
			document.documentElement[attr] = value;
			 document.body[attr] = value;
			 return
		}

		return document.documentElement[attr] || document.body[attr]
	}



	return {
		css,   //=> 在es6中这样写相当于css:css
		offset,
		winHandle
	}

})()