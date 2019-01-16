// 扩展：JS代码如何被运行以及运行后如何输出结果
// [如何被运行]
// - 把代码云翔在浏览器中（浏览器内核来渲染解析）
// - 基于node来运行（node也是一个基于v8引擎渲染和解析JS的工具）

 
// [ 如何输出结果 ]
// - alert：在浏览器中通过弹框的方式输出（浏览器提示框）
// 基于alert输出的结果都会转化为字符串 :把值（如果是表达式先计算出结果）通过toString这个方法转换为字符串，然后在输出
alert(1+1)  //=> '2' 
alert(true);  //=> 'true'
alert([12,23]); //=> '12,23'
alert({ name:'xxx' }) //=> '[object object]'

// confirm: 和alert的用法一致，只不过提示的框中有确定和取消两个按钮，所以它是确认提示框
var num = 12;
var flag = window.confirm(num);
alert(flag)

// prompt: 在confirm的基础上增加输入框

// console //控制台   .log  //日志 
// console.log()  //在浏览器控制台输出日志
// console.dir()  //比log输出的更加详细一些(尤其是输出对象数据值的时候)
// console.tabel()  //把一个JSON数据按照表格的方式输出


一. 数据类型的详细剖析

// 1.number数字类型
// NaN：not a number 但是他是数字类型的
// isNaN： 检测当前是否不是有效数字，返回true代表是有效数字，返回false是有效数字

isNaN('13')  => false
isNaN('珠峰') => true
isNaN(true) => false
isNaN(false) => false
isNaN(null) => false
isNaN(undefined) => true
isNaN({ age: 9 }) => true
isNaN([12,23]) => true
isNaN([12]) => false
isNaN(function(){}) => true
isNaN(/^$/) => true
isNaN(NaN) => true

// isNaN()的机制:
// 1.首先验证当前要检测的值是否为数字类型，如果不是，浏览器会默认的把值转换为数字类型
	把非数字类型的值转换为数字
	-把其他基本类型转换为数字类型： 直接使用Number这个方法转换的
		[ 字符串转数字 ]
			Number('12')  => 13
			Number('12px') => NaN 
			// 如果字符串中出现任意一个非有效数字字符，结果为NaN
		[ 布尔转数字 ]
			Number(true) => 1
			Number(false) => 0

		[ 其他 ]
			Number(null) => 0
			Number(undefined) => NaN

	-把引用数据类型值转换为数字： 先把引用值调取toSting转换为字符串，然后再把字符串调取Number转换为数字	

		[对象]
			({}).toString() -> '[object object]' -> NaN

		[数组]
			[12,23].toString() -> '12,23' ->NaN
			[12].toString() ->'12' -> 12
		[ 正则 ]
			/^$/.toSting() -> '/^$/' -> NaN

		Number('') -> 0
		[].toSting() -> '' -> 0 -> isNaN([]): false
		{}.toSting() -> {} -> NaN -> isNaN({}): true

// 2.当前检查的值已经是数字类型，是有效数字返回false，不是返回true(数字类型中只有NaN不是有效数字，其余都是有效数字)



二 .parseInt / parseFloat
》 等同于Number，也是为了其他类型的值转换为数字类型
》 和Number的区别在于字符串转换分析上

》 parseInt： 把一个字符串中的整数部分解析出来
	parseInt('13.5') => 13
	parseInt('width:13.5px') => NaN
》 parseInt：把一个字符串中的小数（浮点型）部分解析出来
	parseFloat('13.5') => 13.5

Number的原理 ：
	出现任意非有限数字字符，结果就是NaN
parseInt，parseFloat原理：
	从字符串最左边字符串开始查找有效数字字符，并且转换为数字，但是一旦遇到一个非有效数字字符，查找结束


三. NaN的比较
NaN==NaN  ：false  NaN和谁都不相等，包括自己

思考题： 有一个变量num，存贮的值不知道，我想检测它是否为一个有效数字，下面方案是否可以

if(Number(num)==NaN){
	alert("number不是有效数字")
}
不可以，NaN和谁都不相等，条件永远不成立

if(isNaN(num)){
	// 检测是否为有效数字，只有这一种方案
	alert("num不是有效数字")



布尔类型：
只有两个值： true / false

如何把其他数据类型转换为布尔类型
	-Boolean
		Boolean(1)  => true
		Boolean(0)  => false
		Boolean(-1) => true
		Boolean(NaN) => false
	-!(先把其他数据类型转换为布尔类型，然后取反)
		!'哈哈' => false
		!'' => true
		!0 => true
		!1 => false
	-!!(先把其他数据类型转换为布尔类型,取两次反)
		!!'哈哈哈' => true
		!!'' => false
		!!0 => false
		!!1 => true
		!!NaN => false
		!!null => false
		!!undefined => false

	规律：在js中只有“0/NaN/null/空字符串/undefined”这五个值转换为布尔类型的false，其余都是true

null && undefined
都代表空或者没有
- null： 空对象指针
-undefined：未定义

	区别：null一般都是意料之中的没有（通俗理解：一般都是人为手动的先赋值未null，后面的程序中我们会再次给他赋值）
		var num = null；
		：undefined 代表的没有，一般都不是人为手动控制的，大部分都是浏览器自主为空（后面可以赋值也可以不赋值）
		var num; //>此时变量的值，浏览器给分配的就是undefined，后面可以赋值也可以不赋值


// object对象数据类型

普通对象
	-由大括号包裹起来的
	-由0到多组属性名和属性值（键值对）组成 
	属性是用来描述当前属性特征的，属性名是当前具备这个特征，属性值是对这个特征的描述（专业语法，属性名称未键【key】，属性值称为值【value】，一组属性名和属性值称为一组键值对）

	···
		var obj = {  
			name: '哈哈哈',
			age: 9
		};

		// =》对象的操作：对键值对的增删改查
		[获取]
			语法：对象.属性 / 对象[属性]
				obj.name		//哈哈哈
				obj['name']		//哈哈哈 一般来说，对象的属性名都是字符串格式的(属性值不固定，任何格式都可以)

		[增/改]
			在js对象中，属性名是不允许重复的，是唯一的
				obj.name = 'skl';  //=》原有对象中存在name属性，此处属于修改属性
				obj.sex = '男';    //=》原有对象不存在SEX，此处相当于给当前对象新增一个属性SEX
				obj.['age'] = 12;  //=》

		[删]
			- 彻底删除(对象中不存在这个属性了)
				delete obj.age;
				delete obj['age']

				console.log(obj.age)   //undefined

			- 假删除：并没有移除这个属性，只是让当前属性的值为空
				obj.sex = null;
				obj['sex'] = null;

				console.log(obj.sex)    //null

		在获取属性值的时候，如果当前对象有这个属性名，则可以正常获取到值（哪怕是null），但是如果没有这个属性名，结果是undefined
	···

	思考题：
	···
		var obj = {
			name: '哈哈',
			age: 9,
			'haha': 11
		}
		var name = 'haha'

		obj.name  	 // 哈哈
		obj['name']  //	哈哈
		obj[name] == obj['haha']    //  11
 		

 		```
 			'name' 和 name的区别
	 			'name'是一个字符串的值，它代表的是本身
	 			name 是一个变量，不是值，他代表的是本身存储的这个值('haha')
		```
	...	


	// 一个对象中的属性名不仅仅是字符串格式的，还有可能是数字格式的
	var obj = {
		name: '哈哈',
		0: 100
	}
	obj[0] => 100
	obj['0'] => 100
	obj.0 =>Uncaught SyntaxError: Unexpected number

 
	obj[true] = 200;
	console.log(obj[true])  // 200
	obj[null] = 300
	console.log(obj[null])  // 300
	obj[undefined] = 400
	console.log(obj[undefined])  // 400
 	obj[{}] = 500
	console.log(obj[{}])    // 500
	
	当我们存储的属性名不是字符串也不是数字的时候，浏览器会把这个值转换围殴字符串（toSting），然后再进行存储

	obj[{}] = 300;
	先把{}.toSting()后的结果作为对象的属性名为存储进来 obj['[object object]'] = 300

	obj[{}] =>获取的时候也是先把对象转换为字符串'[object object]',然后获取之前存储的300


	var one = new Object();
	var two = new Object();
	var map = new Object();
	map[one] = "one";   one = new Object ==》 map[(new object).toString()] = map['[object object]'] = 'one'
	map[two] = "two";	two = new Object ==》 map[(new object).toString()] = map['[object object]'] = 'two'
	alert(map[one]);  // two



	---
	数组对象(对象由键值对组成的)
		obj oo = {
			a: 12
		};
		var arr = [0:12,1:23]  //12和23 都是属性值，属性名呢？
		数组也是对象


	通过观察结果，发现数组对象的属性名是数字（我们把数字属性名称称为当前对象的索引）
	arr[0]
	arr['0']
	arr.length
	arr['length']


	数组和对象有啥关系？
		数组是特殊的对象。