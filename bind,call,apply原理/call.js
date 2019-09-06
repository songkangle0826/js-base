Function.prototype.myCall = function(context){
	console.log(context,1111)
	context = context || window;  

 	// 这里的this相当于是 obj1.say
	context.fn = this;    //context指的就是传进去的参数，这里其实就是指的就是调用的对象，即obj
	var args = [],result;    //this指的是上下文的环境，这里就是指的say的方法，即在obj对象上创建了say的方法

	for(let i = 1;i < arguments.length;i++){
		args.push(arguments[i]);
	}
	result = context.fn(...args);
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

// 改变了this的作用域,执行的是自己内部创建的函数,然后再把函数删掉
console.log(obj1.say.myCall(obj,1,2,3));
console.log(obj);
console.log(obj1);




// call和apply都是对函数的直接调用，而bind方法返回的仍然是一个函数，因此后面还需要()来进行调用才可以。

