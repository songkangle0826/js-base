/*
 * 变量提升：
 * var a; var b; var c;
 * fn = XXX
*/

var a = 12,
	b = 13,
	c = 14;

function fn(a){
	/*
     * 形参赋值
     * a = 12;
     *
     * 变量提升
     *  var b;
     * 
     * => 在私有作用域中，只有以下两种情况式私有变量
     *  A: 声明过的变量（带VAR/function）
     *  B： 形参也是私有变量
     *
     * 剩下的都不是自己的私有变量，都需要基于作用域链向上查找
	*/
	console.log(a,b,c)  // 12 undefined 14（c是全局的）
	var b = c = a = 20;
	console.log(a,b,c)	// 20 20 20
}

// fn(a)   // ->把FN执行（小括号中式实参：值） =》执行FN把全局变量A的值12当作实参传递给函数的形参 =》fn(12)
// console.log(a,b,c)    // 12 13  20


// ### 关于私有变量的面试题
var ary = [12,23];  // 全局变量
function fn(ary){
	console.log(ary)   //[12,23]
	/*
     * 形参赋值
     * ary = [12,23]  //私有变量
	*/
	ary[0] = 100;	// [100,23]
	ary = [100];	// [100]
	ary[0] = 0;		// [0]
	console.log(ary)	//[0]
}
fn(ary)   //传的是实参:（值 引用地址）
console.log(ary)  //[100,23]