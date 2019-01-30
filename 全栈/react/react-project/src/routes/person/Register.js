import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';
import md5 from 'blueimp-md5';
import { register } from '../../api/person';
import  action from '../../store/action/index';

class Register extends Component{
	constructor(props){
		super(props)
	}
	render(){
		return <div>
			用户名：<input text='type' ref='name' placeholder='请输入用户名'/><br/><br/>
			手机号：<input text='type' ref='phone' placeholder='请输入手机号'/><br/><br/>
			邮箱&nbsp;：<input text='type' ref='email' placeholder='请输入邮箱'/><br/><br/>
			密码：<input text='type' ref='password' placeholder='请输入密码'/><br/><br/>
			<Button type='primary' onClick={ ev=>{ this.registerButton(ev) } }>立即注册</Button>
		</div>
	}
	registerButton = async (ev)=>{
		// console.log(ev.preventDefault)
		ev.preventDefault();
		let refsValue = this.refs;
		let values = {
			name: refsValue.name.value || 'skl',
			phone: refsValue.phone.value || '13018910000',
			email: refsValue.email.value || 'sklhtml@163.com',
			password: md5(refsValue.password.value) || md5("admin")
		}
		let result = await register(values);
		console.log(result)
		if (parseFloat(result.code)===0) {
			this.props.queryBaseInfo()
			this.props.history.push('/person')
			return
		}
		console.log("注册失败")

	}
}

export default connect(null,action.person)(Register)