Function.prototype.myApply = function(context,args){
	console.log(context,1111)
	context = context || window;  

 	// 这里的this相当于是 obj1.say
	context.fn = this;    //context指的就是传进去的参数，这里其实就是指的就是调用的对象，即obj
	var result;    //this指的是上下文的环境，这里就是指的say的方法，即在obj对象上创建了say的方法
	if(args){
		result = context.fn(...args);
	}else{
		result = context.fn();
	}
	delete context.fn;			// 删除obj上的添加的函数
	return result;
}


let obj = {
	name : '哈哈哈哈',
}
let obj1 = {
	name : '啊啊啊啊啊',
	say(a,b,c){
		console.log(this.name,a,b,c,111);
		return 11;
	}
}

// 改变了this的作用域

console.log(obj1.say.myApply(obj,[1,2,3]));
console.log(obj);
console.log(obj1);