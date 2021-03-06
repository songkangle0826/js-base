class Promise{
	constructor(excutorCallBack){
		this.status = 'pending'
		this.value = undefined;
		this.fulfilledAry = []; //管控，必须得then执行后才能执行resolveFn方法，成功要做的方法
		this.rejectedAry = [];	//失败要做的方法

		// => 执行EXCUTOP
		let resolveFn = (result) =>{
			let timer = setTimeout(()=>{
				if(this.status !== 'pending') return;
				clearTimeout(timer)
				this.status = 'fulfilled';
				this.value = result;
				this.fulfilledAry.forEach(item=>item(this.value))
			},0)
			
		};
		let rejectFn = (reason) =>{
			let timer = setTimeout(()=>{
				clearTimeout(timer)
				if(this.status !== 'pending') return;
				this.status = 'rejected';
				this.value = reason;
				this.rejectedAry.forEach((item)=>item(this.value))
			},0)
			
		}
		// => 执行EXCUTOP（异常捕获）
		try{
			excutorCallBack(resolveFn,rejectFn);
		} catch (err){
			// 有异常信息按照rejected状态信息处理
			rejectFn(err);
		}
		
	}

	then (fulfilledCallBack,rejectedCallBack) {
		this.fulfilledAry.push(fulfilledCallBack);
		this.rejectedAry.push(rejectedCallBack);
	}
}

module.exports = Promise;