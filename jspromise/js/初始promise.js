/*
 * Promise：它是ES6中新增加的类（new Promise），目的是为了管理JS中的异步编程的，所以我们也把它成为“Promise设计模式”
*/ 



/*let p = new Promise();
p.then();
	== new Promise().then();  //true
*/

// => 三个状态：pending（准备：初始化成功，开始执行异步的任务） / fulfilled(成功)/rejected(失败)
// Promise本身是同步编程的，它可以管理异步操作
/*new Promise(function(){
	// => 执行一个异步的任务（new Promise的时候，创建Promise的一个实例，立即会把当前函数体中的异步操作执行）
	setTimeout(()=>{

	},1000);
	console.log(1)  //先输出1

}).then();

console.log(2)  //再输出2
*/



/*
	new Promise(function(resolve,reject){
		// resolve: 当异步操作执行成功，我们执行resolve方法
		// reject：当异步操作执行失败，我们执行reject方法
		setTimeout(()=>{
			resolve(100)
		},1000);
		console.log(1)  //先输出1

	}).then((res)=>{
		// 第一个传递的函数是resolve
		console.log('ok',res)
	},()=>{
		// 第二个传递的函数是reject
		console.log('no',res)
	});

	console.log(2)  //再输出2

	let val = null;
	let xhr = new XMLHttpRequest();
	xhr.open('get','js/1.js',false);
	xhr.onreadystatechange = ()=>{
		if (xhr.readyState === 4 && xhr.status) {
			let val = xhr.responeseText;
			// 此处是获取结果，获取结果后还要做好多事情（此时我们把数据绑定等任务写在这里）
		}
	};
	xhr.send(null);
	console.log(val) // =》 如果使用异步AJAX请求，不等AJAX彻底彻底完成，就把VAL输出，此时的结果shiNULL
*/




let pro = new Promise((resolve, reject) => {
    //=>执行一个异步操作
    let xhr = new XMLHttpRequest();
    xhr.open('get', 'js/1.js', true);
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
        	console.log(111)
            let val = xhr.responseText;
            resolve(val);
        }
        if (xhr.status !== 200) {
            //=>失败
           reject(11);
        }
    };
    xhr.send(null);
});
pro.then((res) => {
    console.log(res);
    //=>数据绑定
    return 100;//=>它返回的结果传递给第二个THEN了...
}, () => {
    console.log('no');
}).then((res) => {
    //=>当第一个THEN中的函数执行完，会执行第二个
    console.log(res);
}, () => {

}).then(() => {
    //=>当第二个THEN中的函数执行完，会执行第三个
}, () => {

});