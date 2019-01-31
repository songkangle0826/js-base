// 如果实现数组去重
/*function unique(ary){
	// 利用对象键的唯一性去重
	var obj = {};
	for(var i = 0;i<ary.length;i++){
		// 判断是否已经存在这个属性了（in/hasOwnProperty/属性值是不是undefined）
		var item = ary[i];
		if(obj.hasOwnProperty(item)){
			// obj已经有item属性了
			// ary.splice(i,1)

			// 
			ary[i] = ary[ary.length-1];
			ary.pop();

			i--
			continue;
		}
		obj[item] = item;
	}
	obj = null;
	return ary
}

var ary = [1,1,1,1,1,2,3,4,3,3,2,2,2,1,1,1,2,3,4,4,45,,6,7,]
var res = unique(ary); */


// 为啥ARY.SORT可以执行： 因为SORT是ARRAY.PROTOTYPE上内置的属性方法，而ARY是它的一个实例，可以基于__PROTO__找到原型上这个方法，然后调取这个方法
var ary = [12,13,23,13,14,12,12,14,15];
ary.sort(function(a,b){
	return a-b
})




/*
 	基于内置类的原型扩展方法，供它的实例调取使用
 	我们增加的方法最好设置”My“前缀，防止把内置方法重写

*/

Array.prototype.my_unique = function my_unique(){
	//方法中的this一般都是当前类的实例（u阿胶就是我们要操作的数组） 
	var obj = {},arr = [];
	for(var i = 0;i < this.length; i++){
		var item = this[i];
		obj.hasOwnProperty(item)?(this[i]=this[this.length-1],this.length--,i--):obj[item]=item
	}
	obj = null
	return this;
}

ary.my_unique();     //此时方法执行的返回值为undefined
// ary.__proto__.my_unique();  //this: ary.__proto__  (IE浏览器中屏蔽了我们对__proto__的操作)
// Array.prototype.my_unique(); //基本不用


~function (pro){
	pro.plus = function plus(val){
		return this+Number(val)
	}	
	pro.minus = function plus(val){
		return this-Number(val)
	}
}(Number.prototype)



var n = 5;
var res = n.plus(3).minus(2);		//6
console.log(res)