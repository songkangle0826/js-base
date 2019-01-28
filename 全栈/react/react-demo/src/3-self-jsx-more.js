/*
 * 1.创建一个对象（默认有四个属性：TYPE/PROPS/REF/KEY），最后把这个对象返回
 * 2.根据传递的值修改这个对象
 		TYPE =》 传递的type
 		PROPS 需要做一些处理，大部分传递PROPS中的属性赋值给了对象的PROPS。有一些比较特殊
 		-》如果是ref或者key。我们需要把传递的PROPS中的这两个属性值，给创建对象的两个属性，而传递的Props中va这两个值删除掉
 		-》把传递的CHILDREN作为新创建对象的PROPS中的一个属性
*/

let styleObj = {color:'green'};
function createElement(type,props,children){
	// 创建一个对象，设置一些默认属性值
	props = props || {};
	let obj = {
		type: null,
		props:{
			children: '',
		},
		ref: null,
		key: null
	}
	obj = {...obj,type,props:{...props,children}};
	// => 把REF和KEY提取出来
	// => in判断某个字段是否为对象中的属性
	// 'key' in obj.props?(obj.key=obj.props.key,obj.props.key=undefined):null;
	// 'ref' in obj.props?(obj.ref=obj.props.ref,obj.props.ref=undefined):null;
	return obj
}

let objJSX =  createElement(
	'h1',
	{ 
		id: 'title',
		className: 'title',
		style: styleObj,
		ref:'AA',
		key:'12' 
	},
	'\u54C8\u54C8\u54C8\u54C8'
)

/*
 * type: 'h1',
 * props:{
	id: 'title',
	className: 'title',
	style: styleObj,
	children: '\u54C8\u54C8\u54C8\u54C8',
	ref: undefined,
	key: undefined
   }
 * ref: null,
 * key: null,
 * __proto__: Object.prototype
*/


/*
 * RENDER:把创建的对象生成DOM元素，左后插入到页面中：TYPE就不再是字符串标签名了，而是一个函数（类），但是属性还是存在PROPS中
*/
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
			if (typeof value==='string') {
				let text = document.createTextNode(value);
				newElement.appendChild(text);
			}
			continue;
		}
		newElement.setAttribute(attr,value); //基于SET-ATTRIBUTE可以让设置的属性表现在结构上
	}
	container.appendChild(newElement);
	callback && callback();
}	

let root = document.getElementById('root')
render(objJSX,root,()=>{
	console.log('ok')
})

export {
	createElement,
	render
}