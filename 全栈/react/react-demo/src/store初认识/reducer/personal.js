// 把模块中所有导出的内容全部导入并重新命名为TYPE，此后TYPE对象中包含了所有导出的信息（ES6 MODULE）
// import  * as TYPE from '../action-type.js'


/*
 * VOTE板块的REDUCE
 	state： 原始REDUX管理的状态信息（设置初始值）
 	action：DISPATCH派发的时候传递的行为对象（type，...）
*/
function personal(state={
	baseInfo:{}
},action){
	// ...
	return state;
}


export default personal;