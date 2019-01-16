// js中关于字符串的一些细节知识
// 在js中所用单引号或者双引号包起来的都是字符串，每一个字符串是由零到多个字符组成。

var str = 'hahahahaha';
// str.length -> 字符串长度
str[0] //-> 'h'
str[str.length-1] //=> 'n'
str[100] //=>undefined

// 字符常中的每一个字符串都有一个自己对应位置的索引，也有类似于数组一样的length代表自己的长度

// 循环遍历输出每一项
for(var i = 0,i<str.length;i++){
	console.log(str[i])
}


// 关于字符串中常用的方法
字符串是基本数据类型，字符串的每一次操作都是值类型直接进行操作，不像数组一样是基于空间地址来操作的，所以不存在原有字符串是否改变这一说，肯定是不变的。


### "charAt/charCodeAt"
作用：charAt根据索引获取指定位置的字符，charCodeAt不仅仅获取字符，他获取的是字符对应的Unicode编码值（ASC LL码值）
参数： 索引
返回：字符或者对应的编码
```
var str = 'qwertyuiopasdfghjklzxcvbnm';
str.charAt(100)  // => ''(空字符串)
str[100]         // => undefined

str.charCodeAt(0)// => 113

String.fromCharCode(122)  // 'z'

charCodeAt返回的字符串对应的编码
String.fromCharCode返回的是编码对应的字符

```


### indexOf/lastIndexOf
和数组的indexOf/lastIndexOf一样
基于这两个方法，可以获取字符串在字符串中第一次或者最后一个出现的位置的索引，有这个字符，返回大于等于0的索引，不包含这个字符，返回的结果是-1。可以验证当前字符串是否包含某个字符。
```
var str = 'qwertyuiopasdfghjklzxcvbnm';
if(str.indexOf('@')>-1){
	//=》条件成立，说明包含字符串@符号
}
```

### slice
作用：str.slice(n,m) 从索引n开始找到索引m出（不包含m）， 把找到的字符串当作新字符串返回
```
var str = 'qwertyuiopasdfghjklzxcvbnm';
str.slice(1,3)  //=>we
```

### substring （字符串截取）
和slice语法一模一样，唯一的区别在于，slice支持负数索引。而substring不支持负数索引
```
var str = 'qwertyuiopasdfghjklzxcvbnm';
str.substring(1,3)  //=>we
```


### substr
也是字符串截取的方法，用法是：str.substr(n,m) 从索引n开始截取m个字符
```
var str = 'qwertyuiopasdfghjklzxcvbnm';
str.substr(1,5)  //=>werty
str.substr(-6,3) //=>xcv
```

### toUpperCase/toLowerCase
实现字母大小写转换 
toUpperCase =》 小写转大写
toLowerCase =》 大写转小写

```
var str = 'QwertyuiopAsdfghjklZxcvbnm';
str.toUpperCase()	//"QWERTYUIOPASDFGHJKLZXCVBNM"
str.toLowerCase()   //"qwertyuiopasdfghjklzxcvbnm"
```

### "split"
和数组中的join相对应，数组中的join是把数组每一项按照指定的连续符变为字符串，而split是把字符串按照指定的分隔符，拆分成数组中的每一项

```
var ary = [12,23,34];
var str = ary.join("+")   // 12+23+34
str.split("+")   		  // ["12","23","34"];
```

### "replace" 
作用：替换字符串中的原有字符
参数：原有字符，要替换的新字符
返回：替换后的字符
```
把skl替换成”哈哈“
var str = 'skl2018skl';
str = str.replace("skl","哈哈");  //在使用正则的情况下，每执行一次啊replace只能替换一个
``` 


看str原型方法（String.prototype）



### 真实项目中的需求
```
1.时间字符串格式化
》有一个时间字符串 "2019-1-10 11:46:8",我们项基于这个字符串获取到”04月04日 16日26分“
```
/*
1.基于SPLIT按照空格把字符串拆成两部分（数组的两项）
2.左边这一部分继续以SPLIT按照杠来拆
3.右边这一部分继续以SPLIT按照冒号来拆
4.把需要的信息拼接在一起即可
*/ 
var str = '2019-1-10 11:46:8';
function addZero(val){
	return val < 10? '0'+val: val
}

var ary = str.split(' '),
	aryLeft = ary[0].split('-'), //=> ['2019','1','10']
	aryRight = ary[1].split(':'); //=> [11,46,8]
var month = addZero(aryLeft[1]);
var day = addZero(aryLeft[1]);
var hours = addZero(aryRight[1]);
var minutes = addZero(aryRight[1]);
console.log(month+"月"+day+"日"+hours+"时"+minutes+"分")


### URL地址问好传参解析
> 有一个url地址"http://www.baidu.con/?lx=1&anme=AA&sex=man";地址问好后面的内容是我们需要解析出来的参数信息

{
	lx:1,
	name: 'AA',
	sex: 'man'
}




