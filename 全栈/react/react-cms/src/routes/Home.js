import React from 'react';
import { connect } from 'react-redux';
import { LocaleProvider,DatePicker,Icon,Button } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';  //汉化
import moment from 'moment';
import 'moment/locale/zh-cn';

moment.locale('zh-cn');
/*
 * ANTD的应用
 * LocaleProvide:国际化组件，目的是汉化
*/

class Home extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			ul:[
				{
					id:1,
					name: 'haha1'
				},{
					id:2,
					name: 'haha2'
				},{
					id:3,
					name: 'haha3'
				},
			]
		}
	}
	render(){
		// =》只要LocaleProvide包含的组件都是被汉化的，通过上下文搞得
		return <LocaleProvider>
			<div>
				<DatePicker />
				<ul style={ {width:'200px',height:"300px",background:"red"} } onClick={ e=>{ this.ulClick(e) } }>
					{
						this.state.ul.map((item,index)=>{
							return <li  key={ index } onClick={ (e) => this.click(e,index) }>{ item.name }</li>
						})
					}	
				</ul>
				<Icon type="home" style={ {
					color: 'red',
					fontSize: '50px'
				} }/>
			    <Icon type="setting" theme="filled" />
			    <Icon type="smile" theme="outlined" />
			    <Icon type="sync" spin />
			    <Icon type="smile" rotate={180} />
			    <Icon type="loading" />
				<Button>点击事件</Button>
			</div>

		</LocaleProvider>
	}
	ulClick = (e) =>{
		console.log(e)
		e.stopPropagation()
	}
	click = (e,key)=>{
		e.stopPropagation()
		console.log(key)
	}
}


export default connect()(Home)