const A = require('./A');
let avg = function(...arg){
	//求平均数
	return A.sum(...arg)/arg.length;
}

module.exports = {
	avg: avg
};