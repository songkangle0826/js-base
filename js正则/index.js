/*
 * 2019-03-15
 * 正则： 是一个出路字符串的规则
 * 	1.正则只能用来处理字符串
 *  2.处理一般包含两方面：
 		A:验证当前字符串是否符合某个规则 （正则匹配）
 		B：把一个字符串中符合规则的字符串获取到  （正则捕获）
 *
 * 学习正则其实就是如何编写规则，每一个正则都是由“元字符，修饰符”这两部分组成
 *
 *
*/

// => 1.创建正则的两种方式
	// let reg = /^\d$/g; //=> 字面量方式
	// let reg2 = new RegExp("^\\d$","g"); //=>构造函数方式

// 在正则两个斜杠之间包起来的都是“元字符”，斜杠后面的都是“修饰符”
	// let reg = /^\d$/g;

/*
 * 常用修饰符
 * 	i: igoreCase 忽略大小写
 *	m: multiline 多行匹配
 *	g: global    全局匹配
 *
*/

/*
 * 常用的元字符
 * 	[特殊元字符]
		\d 0-9之间的一个数字  
		\D 非0-9之间的任意字符 
		\w “数字，字母，下划线”中的任意一个 => /0-9a-zA-Z_/等价于\w
		\W 非“数字，字母，下划线”的任意字符
		\s 匹配任意一个空白字符 （包括\t制表符（tab键四个空格））
		\b 匹配边界符 'zhu'(z左边个u右边就是边界)，'zhu-feng'（z左边u右边，f左边g右边是边界）
		\n 匹配一个换行
		\  转义字符（把一个普通字符串转义特殊的字符，例如：\d,把有特殊含义的转换把普通意思，例如\.此处的点就不是任意字符，而是一个小数点）
		.  不仅仅是小数点，代表除了\n以外的任意字符
 		^  已某个元字符开头
 		$  已某个字符串结果
 		x|y x或者y中任意一个(a|z...)
 		[xyz] x或者y或者z中的任意一个
 		[^xyz] 除了x\y\z以外的任意字符 [^]中的……是非
 		[a-z] 获取a-z中的任意一个字符（[0-9] 等价于\d ...）
 		[^a-z] 除了a-z的任意字符
 		() 正则分组
 		(?:) 当前分组址匹配不捕获
 		(?-) 正向预查
 		(?!) 负向预查
 *
 *	[量词元字符：让其左边的元字符出现多少次]
 		* 出现0到多次
 		? 出现零到一次
 		+ 出现N次
 		[n] 出现N次
 		[n,] 出现N到多次
 		[n,m] 出现N到M次
 *		
 *  [普通元字符]
 		只要在正则中出现的元字符（基于字面方式创建），除了特殊和有量词意义的以外，其余都是普通元字符

*/ 



/*
 * []的一些细节
 	[xyz]
 	[^xyz]
 	[a-z]
 	[^a-z]
	
	1.中括号中出现的元字符一般都是代表本身含义的
	2.中括号中出现的两位数，不是两位数，而是两个数字中的任意一个
*/

/*
	let reg = /^.+$/  //=>一个正则设置了^和$，那么代表的含义其实就是只能是xxx
	console.log(reg.test('n')) //true
	console.log(reg.test('1')) //true
	console.log(reg.test('nn')) //true
	console.log(reg.test('\n')) //false
*/

/*
	let reg = /^[.]+$/  //=>一个正则设置了^和$，那么代表的含义其实就是只能是xxx
	console.log(reg.test('n')) //false
	console.log(reg.test('1')) //false
	console.log(reg.test('nn')) //false
	console.log(reg.test('\n')) //false
	console.log(reg.test('....')) //=>true
*/

/*
	let reg = /^[\d]+$/
	console.log(reg.test('0')) //true 
	console.log(reg.test('d')) //false
*/

/*
	let reg = /[18]/; //=>不加^和$代表字符串中只要包含xxx即可
	console.log(reg.test('18')) //false 
	console.log(reg.test('1')) //true
	console.log(reg.test('8')) //true 
*/

/*
	let reg = /^[12-65]$/;  //这个正则的意思是 1或者2-6或者5
	console.log(reg.test('13')) //false 不是12到65
	console.log(reg.test('7')) //false 不是12到65
*/

// 年龄： 18-65之间
/*
 * 18-19 1[89]
 * 20-59 [2-5]\d
 * 60-65 6[0-5]
*/
// let reg = /^((1[8-9])|([2-5][0-9])|(6[0-5]))$/;

/*
	// =>需求：编写一个规则，匹配"[object Object]"
	let reg = /^\[object .+\]$/
	console.log(reg.test('[object AAA]')) //=>true
*/

/*
 * 分组的作用
 *	1.改变的默认的优先级
 *  2.分组捕获
 *  3.分组引用
*/

/*
	//1.改变的默认的优先级
	let reg = /^18|19&/;
	console.log(reg.test('18'))		//=> true
	console.log(reg.test('19'))		//=> true
	console.log(reg.test('1819'))	//=> true
	console.log(reg.test('189'))	//=> true
	console.log(reg.test('181'))	//=> true
	console.log(reg.test('819'))	//=> true
	console.log(reg.test('119'))	//=> true

	let reg = /^(18|19)&/;
	console.log(reg.test('18'))		//=> true
	console.log(reg.test('19'))		//=> true
	console.log(reg.test('1819'))	//=> false
	console.log(reg.test('189'))	//=> false
	console.log(reg.test('181'))	//=> false
	console.log(reg.test('819'))	//=> false
	console.log(reg.test('119'))	//=> false
*/

/*
	3.分组引用
	let reg = /^([a-z])([a-z])\2\1$/ //=>正则中出现的\1代表和第一个分组出现一模一样的内容...  总共四位 第一位和第四位一样 第二位和第三位一样
	console.log(reg.test('level'))
	console.log(reg.test('poop'))
*/

/*
 	2.分组捕获

	// let reg = /^\d{17}(\d|x)$/; //=>只能匹配是否符合格式，不能提取出身份中的一些信息
	// '14262319970926261X'
	// => 142623 地域
	// => 19970926 出生年月
	// => 261X	倒数第二位： 奇数男 偶数：女

	let reg = /^(\d{6})(\d{4})(\d{2})(\d{2})\d{2}(\d)(?:\d|X)$/;
	console.log(reg.exec('14262319970926261X'))
	//=> exec实现的是正则捕获，获取的结果是一个数组，若果不匹配获取的结果是一个null，捕获的时候不仅仅把大正则匹配的信息捕获到，而且每一个小分组中的内容也不活到了["14262319970926261X", "142623", "1997", "09", "26", "1", "X", index: 0, input: "14262319970926261X", groups: undefined]

	// //正则捕获使用的是正则中的EXEC方法
	// 	1.如果可以匹配获取的结果是一个数组，如果不能匹配获取的结果是NULL
	// 	2.如果我们只在匹配的时候，想要获取大正则中的部分信息，我们可以啊这些部分使用小括号包起来，形成一个分组，这样在捕获的时候，不仅仅可以把大正则匹配的信息捕获到，而且还单独的把小分组匹配的信息也不获到了
	// 	3.有时候写小分组不是为了捕获信息，只是为了改变优先级或者进行分组引用，此时我们可以在分组的前面加上”?:“,代表只去匹配，但是不能把这个分组内容捕获
*/