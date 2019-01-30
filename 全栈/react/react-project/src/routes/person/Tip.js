import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Alert, Button} from 'antd';

class Tip extends Component{
	constructor(props){
		super(props)
		console.log(this.props)
	}
	render(){
		return <div>
			<Alert type='warning' message="未登录提醒" description='尊敬的用户,您当前还没有登录,请先登录!!!' />
			<Button type='primary' onClick={ ev=>{
				this.props.history.push('/person/register')
			} }>立即注册</Button>
			<Button type='primary' onClick={ ev=>{
				this.props.history.push('/person/login')
			}}>立即登录</Button>
		</div>
	}
}

export default withRouter(connect()(Tip))