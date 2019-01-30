import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import md5 from 'blueimp-md5';
import { login } from '../../api/person';
import  action from '../../store/action/index';


class Login extends Component{
	constructor(props){
		super(props)
	}
	render(){
		return <div>
			用户名：<input type="text" ref="name" placeholder='请输入用户名'/>
			<br/><br/>
			密码：<input type="text" ref="password" placeholder='请输入密码'/>
			<br/><br/>
			
			<Button type='primary' onClick={ ev=>{ this.handleSubmit(ev) } }>登录</Button>
			<Link style={ {marginLeft:"30px"} } to='/person/register'>立即注册</Link>
		</div>
	}

	handleSubmit = (ev) =>{
		let refValue = this.refs,
			name = refValue.name.value,
			password = md5(refValue.password.value);
		
		login({
			name: name,
			password: password
		}).then(result=>{
			if(parseFloat(result.code)===0){
				this.props.history.push("/person/info")
				return;
			}
			this.props.queryBaseInfo()
			console.log("登录失败")
			return "稍后重试"

		}).catch(err=>{

		})
			
	}
}

export default connect(null,action.person)(Login)