// 发布订阅  订阅  在有发布  [fn1,fn2,fn3]


// 事件迟
// 绑定的方法,都有一个update事件
function Dep(){
	this.subs = [];
}

Dep.prototype.addsub = function(sub){ // 订阅

}

Dep.prototype.notify = function(){
	this.sub.forEach(sub=>sub.update())
}


function Watch(fn){	// watch是一个类,通过这个类创建的实例都拥有update方法
	this.fn = fn
}

Watch.prototype.update = function(){
	this.fn()
}


let watch = new Watch(function(){	// 监听函数
	alert(1)
})


let dep = new Dep();
dep.addSub(watcher);		// 将watch放到了数组中[watcher.update]


console.log(dep.subs);
