import React from 'react';
import { connect } from 'react-redux';
import action from '../../store/action';

class Create extends React.Component{
	constructor(props){
		super(props)
		console.log(props)
		this.state = {

		}
	}
	render(){
		return <div>
			用户编号： <input ref='USER_ID' type="text" />
			<br/><br/>
			用户姓名： <input ref='USER_NAME'  type="text" />
			<br/><br/>
			<button onClick={ this.submit }>增加用户</button>
		</div>
	}
	submit = ev =>{
		let {USER_ID,USER_NAME} = this.refs;

		let { create,history } = this.props;
		// 相当于DISPATCH派发
		create({
			id: USER_ID.value,
			name: USER_NAME.value
		})
		USER_ID.value = USER_NAME.value = "";

		// 回到列表页
		history.push('/custom/list');

	}
}


export default connect(state=>({...state.xustom}),action.custom)(Create)