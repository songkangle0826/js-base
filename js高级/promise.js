
var a1 = ()=>{
	return new Promise((res,rej)=>{
		setTimeout(function(){
			console.log('111')
			rej({code:0,data:{name:1}})
		},2000)
	})
}
var a2 = ()=>{ 
	return new Promise((res,rej)=>{
		setTimeout(function(){
			console.log('222',)
			res({code:0,data:{name:2}})
		},3000)
		
	})
}

Promise.all([a1(),a2()]).then(arr=>{
	console.log(arr)
},function(data){
	console.log(data)
})


// Promise.race([a1(),a2()]).then(arr=>{
// 	console.log(arr)
// },function(data){
// 	console.log(data)
// })


try{
	a();
	b();
	c();
}catch(e){

}
var a = async ()=>{
	await ajax({
		url: '',
		data: '',
		success: function(res){
			try{

			}catch(e){

			}
			if(res.code=='1'){
				return new Promise((res,rej)=>{})
				// 如果a爆报错了，就不让b执行了
			}
		}
	})
}

