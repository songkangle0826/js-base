// 数组去重的方法(不改变原来的数组)

// 1.对象键值对处理（推荐）
Array.prototype.myUnique = function(){
	// => this: ary我们需要操作的数组，如果我们不像改变原有的数组，我们需要把要操作的数组克隆一份一模一样的处理，处理的都是克隆的这个数组
	let _this = this.slice(0); //=[...this]
	let obj = {};
	for(let i = 0;i<_this.length;i++){
		let item = this[i];
		if(obj[item]){
			// 当前迭代这一项在数组中的已经存在，我们把这一项在数组中干掉
			_this[i] = _this[_this.length-1];
			_this.length--;
			i--
			continue;
		}
		obj[item] = true;
	}

	return _this;
}


// 双循环
Array.prototype.myUnique1 = function () {
	let _this = [...this];
	for(let i = 0;i<_this.length;i++){
		let item = _this[i];
		// => 每一次迭代ITEM后，都拿其后面的内容和它进行比较（出现和当前相同的，我们就在数组中把其干掉）
		for(let j =0;j<_this.length;j++){
			if(item === this[j]){
				_this[j] = _this[_this.length-1];
				_this.length --;
				j--;
			}
		}
	}
	return _this;
}

// => indexOf: 获取当前项在数组中第一次出现索引的位置，也能判断是否存在这一项（不存在获取的索引是-1），这个方法不兼容IE6-8
Array.prototype.myUnique2 = function () {
	let _this = [...this];
	// => 依次迭代数组中的每一项，验证当前项在数组中是否存在(不是和整个数组比较是否存在，而是和当前项的后面项比较是否存在=》类似于双For)，存在把当前项干掉
	for(let i = 0;i<_this.length;i++){
		let item = _this[i];
		nextAry = _this.slice(i+1);
		if(nextAry.indexOf(item)>-1){
			_this[i] = this[_this.length-1];
			_this.length--;
			i--;
		}
	}
}

// 排序后相邻去除法
// 先把数组进行排序，验证当前项和后一项是否相同，如果不相同，说明没有重复，我们把保存即可

Array.prototype.myUnique3 = function(){
	let that = [],
	ary = this.slice(0).sort((a,b)=>a-b)
	for(let i = 0;i<ary;i++){
		let item = this[i];
		let	next = this[i+1];
		if(item !==next){
			that.push(item);
		}
	}
	return that
}

let ary = [1.2,3,4,1,2,3,4,5,1,1,1,1,2,3,3,3,4];
let uniqueAry = ary.myUnique();
console.log(uniqueAry)


