### DOM数
> dom tree
> 当浏览器加载HTML页面的时候，首先就是DOM结构的计算，计算出来的DOM结构就是DOM树（把页面中的HTML标签像树状结构一样，分析出之间的层级关系）
window	
document
html
head                         body
meta title link  style..     div ul li script

DOM树描述了标签和标签之间的关系（节点间的关系），我们只要知道任何一个标签，都可以依据DOM中提供的属性和方法，获取到页面中任意一个标签或者节点


### 在js中获取DOM元素的方法
“ getElementById ”
>通过元素的ID获取指定的元素对象，使用的时候都是“document.getElementById('')” 此处的document是限定了获取元素的范围，我们把它称为“上下文（context）”
强调点：
	1.getElementById的上下文只能是document
		-因为严格意义上，一个页面中的ID是不能重复的，浏览器规定在这个文档中既可以获取这个唯一的ID
	2.如果页面中的ID重复了。我们基于这个方法只能获取到第一个元素，后面相同ID元素无法获取到
	3.在IE6-7浏览器中，会把表单元素（input...）的name属性值当作ID来使用（建议：使用使用表达元素的时候，不要让name和id值有冲突）

“ getElementsByTagName ”
	’[context].getElementsByTagName‘在指定的上下文中，根据标签名获取到一组元素集合（HTMLCollection）
强调点：
	1.获取的元素集合点是一个类数组（不能直接的使用数组中的方法）
	 	var oBox = document.getElementById('box'),
		HTMLCollection = oBox.getElementsByTagName('div')
	2.他会把当前上下文中，子子孙孙（后代）层级内的标签都获取到（获取的不仅仅是儿子级的） 
	3.基于这个方法获取到的结果永远都是一个集合（不管里面的是否有内容，也不管有几项，它是一个容器或者集合），如果想操作集合中具体的某一项，需要基于索引获取才可以 ....

“ getElementsByClassName ”
	'[context].getElementsByClassName()'在指定的上下文中,基于元素的样式类名(class="xxx")获取一组元素集合
强调点：
	1.真实项目中,我们经常基于样式类来给元素设置元素,所以在js中,我们也会经常基于样式类来获取元素,但是此方法在IE6-8下不兼容

“ getElementsByName ”
	"document.getElementsByName()"它的上下文也只能是document,在整个文档中,基于元素的name属性值获取一组节点集合(也是一个类数组)
前调点:
	1.在IE浏览器中(IE及以下版本),只对表单的name属性起作用(正常来说,我们项目中只会给表单元素设置name,给非表单元素name,其实是一个不太符合的设计)


“ querySelector ”
	'[context].querySelector()' 在指定的上下文中基于选择器(类似于css选择器)获取到指定的元素对象(获取的是一个元素,哪怕选择器匹配了多个,我们之获取一个)

“ querySelectorAll ”
	在querySelectorAll的基础上,我们获取到选择器匹配到的所有元素,结果是一个基点集合(nodeList)

强调点：
	querySelector/querySelectorAll都是不兼容IE6-8浏览器的(不考虑兼容的情况下,我梦能用byID或者其他方式获取的,也尽量不要用这两个方法,这两个方法性能消耗比较大)

	document.querySelector("#HAHA")
	document.querySelectorAll("#HAHA")
	document.querySelectorAll('.box>div')
	document.querySelectorAll('.box>div')
	document.querySelectorAll('[name="hobby"]')


“ document.head ”
	获取HEAD元素对象

“ document.body ”
	获取BODY元素对象

“ document.documentElement ”
	获取HTML元素对象

```javascript
	//=>需求: 获取浏览器一屏幕的宽度和高度(兼容所有的浏览器)
	document.documentElement.clientWidth || 
	document.body.clientWidth
	document.documentElement.clientHeight || 
	document.body.clientHeight
```

### 面试题:获取当前页面中所有ID为HAHA的元素(兼容所有浏览器)
```javascript
	//=>不能使用querySelectorAll
	/* 思路
	 * 1.首先获取当前文档中所有的HTML标签
	 * 2.依次遍历这些元素标签对象,谁的ID等于HAHA,我们就把谁存储起来即可
	*/
```
function queryAllById(id){
	var nodeList = document.getElementsByTagName('*'); //=>基于通配符*获取到这个文档中所有的标签
	// =>遍历集合中的每一项,把元素ID和传递ID相同的这一项存储起来
	var ary = [];
	for(var i = 0;i<nodeList.length;i++){
		var item = nodeList[i]
		item.id === id ? ary.push[item]:null
	}
	return ary;
}
queryAllById("HAHA");

console.log(HAHA);  //在js中,浏览器中会自动把元素的id拿过来当变量用(不需要自己获取设置,而且ID重复,获取的结果就是一个集合,包含所有ID项,不重复就是一个元素对象(类似ById获取的结果))




节点与描述节点之间的属性
### 节点（node）
>在一个HTML文档中出现的所有东西的都是节点
>元素节点（HTML标签）
>文本节点（文字内容）
>注释节点（注释内容）
>文档节点（document）

每一种类型的节点都会有一些属性区分自己的特点和特征
-nodeType： 节点类型
-nodeName： 节点名称
-nodeValue： 节点值

```元素节点
	nodeType：1
	nodeType：大写标签名
	nodeValue：null
```

在标准浏览器中，浏览器都会把空格，换行当作文本节点处理

``` 文本节点
	nodeType：3
	nodeName："#text"
	nodeValue：文本内容
```
``` 注释节点
	nodeType：8
	nodeName："#comment"
	nodeValue：注释内容
```
``` 文档节点
	nodeType：9
	nodeName："#document"
	nodeValue：null

### 描述节点关系的属性

" parentNode "
> 获取当前节点唯一的父亲节点


" childNodes "
> 获取当前元素的所有子节点
	> -子节点：只获取儿子级别的
  	  -所有：包含元素节点，文本节点等

" children "
> 获取当前元素所有的元素子节点
	>在IE6-8中注释节点也当作元素节点来获取到，所有兼容性不好。


" previousSibling "
> 获取当前节点的上一个节点（获取的哥哥可能是元素也可能是文本等）
> previousElementSibling ：获取上一个哥哥元素节点（不兼容IE8）


" nextSibling "
> 获取当前节点的下一个弟弟节点
> nextElementSibling: 下一个弟弟元素节点（不兼容IE8）


" firstChild "
> 获取当前元素的第一个子节点（可能是元素或文本等）
> firstElementChild 获取第一个元素节点


" lastChild "
> 获取当前元素的最后一个子节点
> lastElementChild 获取当前元素的最后一个子元素节点

```
// 需求一： 获取当前元素的所有元素子节点
	// 基于children不兼容IE低版本浏览器（会把注释当作元素节点）

	/*
	 * chikdren: 获取当前元素所有的元素子节点
	 *  @parametet:
	 * 		curEle: [object]current elemrnt
	 *  @return
	 *  	[array]all the element nodes
	 * 	by team on 2018
	*/
	function children(curEle){
		var result = [], curEle.childNodes;
		for(var i = 0;i<curEle.length;i++){
			if(curEle[i].nodeType==1){
				list.push(curEle[i])
			}
		}
		return result;
	}
	console.log(children(course))


	// 需求：获取当前元素的上一个哥哥元素节点
	// > previousElementSibling不兼容
	/* prev：获取当前元素的上一个哥哥元素节点
	 * @parameter
	 *	curEle: [object]
	 * @return 
	 *	[object] last elder brother element
	 *  by skl on 2019
	*/ 
	function prev(curEle){
		//=》先找当前元素的哥哥节点，看是否为元素节点，不是基于哥哥找哥哥的上一个节点。。。一直找到元素节点或者没有哥哥了（说明我就是老大），则结束查找
		var pre = curEle.previousSibling;
		while(pre && pre.nodeType!==1){
			/* 
			 *	pre && pre.nodeType!==1 
			 *  pre是验证还有木有，这样写代码有，没有pre是null
			 *  pre.nodeType是验证是否为元素
			*/
			pre = pre.previousSibling;
		}
		return pre;
	}
```

扩展：
next下一个弟弟元素节点，
prevAll获取所有哥哥元素节点，
nextAll获取所有弟弟元素节点
silbings获取所有兄弟节点，
index获取当前元素的索引...



### DOM增删该查
"
createElement
 > 创建一个元素标签（元素对象）
 > `document.createElement([标签名])`

appendChild
 > 把一个元素对象插入到指定容器的末尾
 > `[container].appendChild([newEle])`

insertBofore
 > 把一个元素对象插入发哦指定容器中某一个元素标签之前
 > `[container].insertBofore([newEle]，[oldEle])`

cloneNode
 > 把某一个节点进行克隆
 > `[curEle].cloneNode()`: 浅克隆，只克隆当前标签
 > `[curEle].cloneNode(true)`：深克隆，当前标签及其里面的内容都一起克隆了

removeChild
 > 在指定容器中删除每一个元素
 > `[container].removeChild([curEle])`

set/get/removeAttribute
	设置/获取/删除 当前元素的某一个自定义属性值（两种方法）
 ···javascript
 	var oBox = document.getElementById('box');

 // 1.=> 把当前元素作为一个对象，在对象对应的堆内存新增一个自定义属性
 	//增加
 		oBox.myIndex = 10;
 	//获取
 		console.log(oBox['myIndex'])
 	//删除
 		oBox.myIndex = null;
 		delete oBox.myIndex

 // 2.=> 基于Attribute等DOM方法完成自定义属性的设置
 	// 设置
 		oBox.setAttribute('myColor','red');
 	// 获取
 		oBox.getAttribute('myColor');
 	// 删除
 		oBox.removeAttribute('myColor');

上下两张机制属于独立的运作机制，不能互相混淆使用

	- 第一种是基于对象键值对操作方式，修改当前元素对象的堆内存空间来完成
	- 第二种是直接修改页面中HTML标签的结构来完成的（此种方法设置的自定义属性可以在结构上呈现出来）
		-基于setAttribute设置的自定义属性值都是字符串
 ···

"

### 案例
/*
 * 需求：解析一个URL字符串问号传参和HASH
*/ 
// 解析a标签href
	function queryURLParameter(str){
		// 1.创建一个A标签，把需要解析的地址当作A标签的HREF赋值
		var link = document.createElement('a');
		link.href = str;
			//页面中不需要展示A，我们只是想要利用它的属性而已，所以无需添加到页面
		// 2.A元素对象的HASH/SEarch两个属性分别存储了哈希值和参数值
		var search = link.search.substr(1);
		var hash = link.hash.substr(1);
		// 3.分别解析出HASH和参数即可
		var obj = {};
		hash?obj.HASH=hash: null;
		if(search){
			console.log(search)
			var list = search.split('&');
			for(var i = 0;i<list.length;i++){
				var arrChildlist = list[i].split('=')
				console.log(arrChildlist[0],arrChildlist[1])
				obj[arrChildlist[0]] = arrChildlist[1]
			}
		}
		console.log(obj)
		return obj;


	}
	var str = 'https://www.baidu.com?lx=1&name=AA&age=1#teacher'
	queryURLParameter(str)


