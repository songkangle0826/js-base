/*
 * 1.先找到问号
 * 2.首先我们需要验证是否存在#哈希值，存在我们从问号开始截取到#，不存在我们直接截取到字符串末尾
 * 3.以&符进行拆分（数组）
 * 4.遍历数组中的每一项，把每一下再按照=进行拆分，把拆分后的第一项作为对象的属性名。第二项作为属性值进行存储
*/ 

var str = 'http://www.baidu.con/?lx=1&anme=AA&sex=man#teacher'
//=》#后面的称为哈希（HASH）值，这个值可能有可能没有，有的话我们截取的时候需要过滤掉

function strXI(str){
	// 获取
	var indexASK = str.indexOf("?");
	var indexWELL = str.indexOf('#');
	var indexStr = '';
	if(indexWELL>-1){
		//=>存在＃
		indexStr = str.substring(indexASK+1,indexWELL)
	}else{
		indexStr = str.substr(indexASK+1)
	}
	var ary = indexStr.split('&')
	var obj = {}
	for(var i=0;i<ary.length;i++){
		var item = ary[i];
		var itemAry = item.split('=');
		obj[itemAry[0]] = itemAry[1]
	}
	return obj
}
console.log(strXI(str))




// ~function(pro){
// 	pro.queryURLParameter = function () {
// 		var obj = {};
// 		var reg = /([^?=&#]+)(?:=?([^?=&#]+)?)/g;
// 		this.replace(reg,function(){
// 			var key = arguments[1],
// 			value = arguments[2] || null;
// 			obj[key] = value;
// 		})
// 	}
// }(String.prototype)

// console.log(str.queryURLParameter())
