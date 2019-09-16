/*
 * 生成器是一个函数,可以用来生成迭代器
 * 生成器函数和普通函数不一样,普通函数一旦调用一定会执行完成
 * 生成器函数遇到暂停点就会停下来,直到再次让他执行
*/

// 生成器函数有一个特点,需要加一个*号
// 生成器有若干个阶段,如何划分这些阶段呢
function *go(a){
	console.log(1);
	// 此时的b用来用外界的值输入进来的,如let r2 = it.next('B的值');
	// 这一行实现输入和输出,本次的输出放在yield后面,下次的输入放在yield前面
	let b = yield a;
	console.log(2);
	let c = yield b;
	console.log(3);
	return c;
}

// 生成器函数和普通的函数不一样,调用它的话函数并不会立即执行
// 他会返回此生成器的迭代器,迭代器是一个对象,每调用一次next皆可以返回值对象
let it = go('a的值');
// 第一次调用next会返回一个对象,此对象会有两个属性,一个事value就是yield后面的那个值,一个事done表设计是否迭代完成


// 第一个next执行不需要传参,传参没有意义
let r1 = it.next();  
console.log(r1)  // { value: 'a的值', done: false }



let r2 = it.next('B的值');
console.log(r2)	// { value: 'B的值', done: false }



let r3 = it.next();  // next是个下一次传参的
console.log(r3)	// { value: undfined , done: true }



