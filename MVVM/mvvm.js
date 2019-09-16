function Vue(options={}){
	console.log(options)
	this.$options = options;  // 将虽有属性挂载在了$options;
	// this._data
	var data = this._data = this.$options.data;

	observe(data);

	for(let key in data){
		Object.defineProperty(this,key,{
			enumerable: true,
			get(){
				return this._data[key]
			},
			set(newValue){
				this._data[key] = newValue;
			}
		})
	}

	new Compile(options.el,this);

}


// 编译
function Compile(el,vm){
	// el 表示替换的范围
	vm.$el = document.querySelector(el);


	console.log(vm.$el)

	// 创建一个新的空白的文档片段( DocumentFragment),放到内存中
	let fragment = document.createDocumentFragment();

	while(child = vm.$el.firstChild){ // 将app中的内容移入到内存中
		// console.log(child,vm.$el.firstChild,111)
		fragment.appendChild(child);
	}

	replace(fragment);
	function replace(fragment){
		// 循环每一层
		Array.from(fragment.childNodes).forEach(function(node){


			let text = node.textContent;
		
			let reg = /\{\{\s*(.*)\s*\}\}/;

			if(node.nodeType === 3 && reg.test(text)){
				// console.log(RegExp.$1);

				// RegExp.$1是RegExp的一个属性,指的是与正则表达式匹配的第一个 子匹配(以括号为标志)字符串，以此类推，RegExp.$2，RegExp.$3，..RegExp.$99总共可以有99个匹配
				let arr = RegExp.$1.split('.');
				let val = vm;


				arr.forEach(function(k){  // 取this.a.a / this.b
					k = k.trim();
					val = val[k];
				})


				node.textContent = text.replace(/\{\{(.*)\}\}/,val)
			}		
			if (node.childNodes) {
				replace(node)
			};
		})
	}


	vm.$el.appendChild(fragment);
}




function Observe(data){	// 这里写我们的主要逻辑
	for(let key in data){ // 把data属性通过Object.defineProperty的方式定义属性
		let val = data[key];

		observe(val);		// 再次观察,如果val还是对象

		Object.defineProperty(data,key,{
			enumerable: true,
			get(){
				return val;
			},
			set(newValue){ // 更改值的时候
				if(newValue == val){ // 设置的值和以前的是一样的东西
					return
				}
				val = newValue; // 如果以后再获取值的时候,将刚才设置的值在丢回去
				observe(val);
			}
		})
	}
}


// 观察对象,给对象增加Object.defineProperty
function observe(data){
	// 要递归
	if(typeof data !== Object) return

	return new Observe(data)
}







// vue不能新增不存在的属性,不能存在的属性没有get和Set
// 深度响应 因为每次赋予新对象增加数据劫持
