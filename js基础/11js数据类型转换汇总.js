### js中数据类型转换汇总
js的数据类型分为
[基本数据类型]
	数字 number
	字符串 string
	布尔 boolean
	空 null
	未定义 undefined
[引用数据类型]
	对象 object
		普通对象
		数组对象（Array）
		正则对象 (RegExp)
		日期对象（Date）
		数学函数 （Math）
		...
	函数 function

真实项目中，根据需求，我们往往需要把数据类型之间进行转换


### 把其他类型转换未number类型
```1.发生的情况
	-isNaN检测的时候：当检测的值不是数字类型，浏览器会自己调用number方法把它先转换未数字，然会在检测是否未非有效数字
		isNaN('3') => false
			Number('3') => 3
			isNaN(3) => false
		isNaN('3px') =>true
			Number('3') => NaN
			isNaN(NaN) => true
	-基于paserInt/parseFloat/Number去除手动转换未数字类型
	-数学运算：+ - * / %，但是"+"不仅仅是数学运算，还可能是字符串拼接
		'3'-1=>2
		Number('3')->3
		'3px'-1 =>NaN
		'3px'+1 =>'3px1'  //字符串拼接
		var i = '3';
		i++;     //4    i++就是单纯的数学运算，已经摒弃掉字符串拼接的规则
		i+=1;    //'31'
		i=i+1;   //'31'
	-在基于“==”比较的时候，有时候也会把其他值转换为数字类型
	-...


	2.转换规律：
	//=》转换的方法：Number(浏览器自行转换都是基于这个方法完成的)
	【把字符串转数字】
		只要遇到一个非有效数字字符，结果就是NaN
	【把布尔转换未数字】
		true -> 1
		false -> 0
	【把没有转换未数字】
		'' -> 0
		' ' -> 0  空格（space）
		'\n' -> 0 换行符（Enter）
		'\t' -> 0 制表符（Tab）
		null -> 0
		undefined => NaN
	[把引用类型值转换围殴数字]
		首先都先转换为字符串（toString），然后在转换未数字（Number）
```

### 把其他类型值转换未字符串
```1.发生的情况:
	-基于alert/confirm/prompt/document.write等方法输出内容的时候，会把输出的值转换未字符串，然后再输出
		alert(1) => '1'
	-基于“+”进行字符串拼接的时候
	-把引用类型值转换为数字的时候，首先会转换为字符串，然会在转换为数字
	-给对象设置属性名，如果不是字符串，首先转换为字符串，然后在当作属性存储到对象中（对象的属性只能是数字或者字符串）
	-手动调用toSting/toFixed/join/String等方法的时候，也是为了转换为字符串
		var n = Math.PI.toFixed(2) => '3.14';
		[12,23,34].join('+')  => '12+23+34'
	2.转换规律
		//=>调用的方法：toSring

		【除了对象，都是你理解的转换结果】
			1 => '1'
			NaN => 'NaN'
			true => 'true'
			null => 'null'
			undefined => 'undefined'
			[] => ''
			[12] => '12'
			[12,23] => '12,23'
			(function(){}) => 'function(){}'

		【除了对象，都是你理解的转换结果】
			{name:'xxx'} -> '[object object]'
			{} -> '[object object]'
			不管是啥样的普通函数，最后结果都一样
```

### 把其他值转换为布尔值
```1.发生的情况:
	-基于!/!!/Boolean等方法转换
	-条件判断中的条件最后都会转换为布尔类型
		if(n){}
		if('3px'+2){}
	2.转换规律
		只要“0/NaN/''/null/undefined”五个字转换为布尔值false，其余的都是转换围殴true

```


### 特殊情况：数学运算和字符串拼接“+”
```
	//=>当表达式中出现字符串，就是字符串拼接，否则就是数学运算
	1+true=2 => 数学运算
	'1'+true => '1true' 字符串拼接
	[12]+10 => '1210'  //虽然没有看见字符串，但是引用类型转换为数字，首先会转换为字符串，所以变为了字符串拼接
	({})+10 => "[object object]10"
	[]+10 => '10'

	{}+10 => 10 这个和以上说的没有半毛钱关系，因为他根本就不是数学运算，也不是字符串拼接，它是两部分代码
	 	{} 代表一个代码块，
	 	+10 才式我们的操作
	 	严格写法： {}; +10; 

	 	{}+[] =0
	 	{}+false =0
	 	{}+true=1
	 	{}+{} = '[object object][object object]'
```


思考题
```
12+true+fase+null+undefined+[]+'珠峰'+null+undefined+[]+true   //"NaN珠峰nullundefinedtrue"
12+true+fase+null = 13
undefined // NaN
13+NaN = NaN
NaN+[] = NaN;
NaN+'珠峰' = 'NaN珠峰nullundefined"
[]  = ''
'NaN珠峰nullundefined'+''+true
"NaN珠峰nullundefinedtrue"

```

### 特殊情况： ”==“在进行比较的时候，如果足有两边的数据类型不一样，则先转为相同的类型，在进行比较

	对象==对象： 不一定相等，因为对象操作的是引用地址，地址不相同，则不相等

```
{name:'xxx'} = {name:'xxx'} =>false
[] == [] =>false

var obj1 = {};
var obj2 = obj1;
obj1 == obj2 => true

======对象跟对象比较，比较的是地址，![]/!{}
!对象 == !对象的地址（地址不是空）  ！对象=false

对象==数字：把对象转换为数字
对象==布尔：把对象转换为数字，把布尔叶转换为数字
对象==字符串：把对象转换为数字，把字符串也转换为数字
字符串==数字：字符串转换为数字
字符串==布尔：都转换为数字
布尔==数字：把布尔转换为数字


1==true  => true
1==false => false
2==true  => false  //这是是把true变为数字1



=====不同情况的比较，都是把其他值转换为数字，然后在进行比较

null == undefined  => true
null === undefined => false
null&&undefined和其他值都不想等

NaN==NaN : false
NaN和谁都不想等



[] == []  =>false
[] （0）== true（1）	 => false  都转换为数字 0==1
![] == true :false  先算![],把数组转换为布尔取反为false => false==true

[] == false : true 都转换为数字 0==0
![]（false） == false => true  先算![],把数组转换为布尔取反=> false =>false==false  


if a==1 && a==2 && a==3:
	print("111");
a = ?才能输出'111'



if(a==1 && a==2 && a==3){
	console.log(111)
}
var a = {
	i : 0
	valueOf: function(){
		return ++a.i
	}
}
// 复杂数据类型转number顺序如下
// 1.先使用valueOf()方法获取其原始值，如果原始值不是Number，则使用toString方法转化为string
在将string转换为Number