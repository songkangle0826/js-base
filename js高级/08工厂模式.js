/*
 * 工厂模式（Factory Pattern）
 *  1.把实现形同功能的代码进行“封装”，以次来实现“批量生成”（后期想要实现这个功能我们只需要执行函数即可）
 *  2.“低耦合高内聚”：减少页面中的冗余代码，提高代码的重复使用率
*/

var p1 = {
	name: '',
	age:
}
function createPerson(name,age){
	var obj = {};
	obj.name = name;
	obj.age = age;
	return obj;
}
var p1 = createPerson('xxx', 25);
var p2 = createPerson('xxx', 18);