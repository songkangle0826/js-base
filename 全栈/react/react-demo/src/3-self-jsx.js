/*
 * CREATE-ELEMENT: 创建JSX对象
 * 参数：至少连个 TYPE/PROPS，CHILDREN这个部分可能没有可能有多个
*/

function createElement(type,props,...childrens){
	let ref,key;
	console.log(props)
	if(props){
		if('ref' in props){
			ref= props.ref;
			props.ref = undefined
		}
		if('key' in props){
			key= props.key;
			props.key= undefined
		}	
	}
	return {
		type:type,
		props:{
			...props,
			children: childrens.length<=1?(childrens[0] || ''):childrens
		},
		ref,
		key
	}
}




function render(obj,container,callback){
	let {type,props} = obj || {};
	let newElement = document.createElement(type);
	for (let attr in props){
		if(!props.hasOwnProperty(attr)) break;
		if(!props[attr]) continue; // 如果当前属性没有值，直接不处理即可。
		let value = props[attr];
		// =》 className的处理
		if(attr === 'className'){
			newElement.setAttribute('class',value);
			continue;
		}
		if(attr === 'style'){
			if (value === '') continue;
			for (let styKey in value){
				if(value.hasOwnProperty(styKey)){
					newElement['style'][styKey] = value[styKey]
				}
			}
			continue;
		}
		// children
		if(attr === 'children'){
			/*
			 * 可能是一个值：可能时字符串也可能是一个JSX对象
			 * 可能是一个数组：数组中的每一项是字符串也可能是JSX对象

			 *
			 *
			 * 首先把一个值也变成数组，这样后期统一操作数组即可
			 * 
			*/
			if(! (value instanceof Array)){
				value = [ value ]
			}
			value.forEach((item,index)=>{
				// ->验证ITEM是什么类型的：如果是字符串就是创建文本，如果是对象，再次执行RENDER方法，把创建的元素放到创建的大盒子中
				if (typeof item==='string') {
					// 如果只有一个值
					let text = document.createTextNode(item);
					newElement.appendChild(text);
				}else{
					render(item,newElement);
				}
			})
			continue;
		}
		newElement.setAttribute(attr,value); //基于SET-ATTRIBUTE可以让设置的属性表现在结构上
	}
	container.appendChild(newElement);
	callback && callback();
}

export {
	createElement,
	render
}