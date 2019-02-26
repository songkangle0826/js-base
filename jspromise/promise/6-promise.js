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

		// fulfilledCallBack不传递的情况
		typeof fulfilledCallBack !== 'function'? fulfilledCallBack = result =>{
			return result
		} : null;

		typeof rejectedCallBack !== 'function'? rejectedCallBack = reason =>{
			throw new Error(reason.message)
		} : null

		// 返回一个新的Promise实例
		return new Promise((resolve,reject)=>{
			this.fulfilledAry.push(()=>{
				try {
					let x = fulfilledCallBack(this.value);
					if(x instanceof Promise){
						x.then(resolve,reject);
						return;
					}
					resolve(x);
				}catch(err){
					reject(err)
				}
				
			});
			this.rejectedAry.push(()=>{
				try{
					let x = rejectedCallBack(this.value);
					if(x instanceof Promise){
						x.then(resolve,reject);
						return;
					}
					resolve(x)
				}catch(err){
					reject(x)
				}
			})
		});

		// this.fulfilledAry.push(fulfilledCallBack);
		// this.rejectedAry.push(rejectedCallBack);
	}

	catch(rejectedCallBack){
		return this.then(null,rejectedCallBack)
	}
}

module.exports = Promise;