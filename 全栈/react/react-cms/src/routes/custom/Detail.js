import React from 'react';
import { connect } from 'react-redux';
import Qs from 'qs';

class Detail extends React.Component{
	constructor(props){
		super(props)
		this.state = {}
	}
	// 1.问号传参
	/*render(){
		let {location:{ search },data} = this.props
		let customId = Qs.parse(search.substr(1)).id || 0
		customId = parseFloat(customId);
		let item = data.find(item=>parseFloat(item.id) === customId )
		if(!item) return '当前用户不存在'
		return <div>
			编号： {item.id}
			<br />
			姓名： { item.name }
		</div>
	}*/

	// 2.基于STATE传值
	/*render(){
		let {location:{ state },data} = this.props
		let customId = state || 0
		customId = parseFloat(customId);
		let item = data.find(item=>parseFloat(item.id) === customId )
		if(!item) return '当前用户不存在'
		return <div>
			编号： {item.id}
			<br />
			姓名： { item.name }
		</div>
	}*/

	// URL地址参数
	render(){
		let {match:{ params },data} = this.props
		let customId =  params.id || 0;  // =>path='/custom/detail/:id' 路由冒号后面 的值就是以后解析时候的属性名
		customId = parseFloat(customId);
		let item = data.find(item=>parseFloat(item.id) === customId )
		if(!item) return '当前用户不存在'
		return <div>
			编号： {item.id}
			<br />
			姓名： { item.name }
		</div>
	}


}

export default connect(state=>({...state.custom}))(Detail)