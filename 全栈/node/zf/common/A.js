let sum = function(...arg){
	// 求和
	return eval(arg.join('+'));
}

module.exports = {
	sum: sum
};