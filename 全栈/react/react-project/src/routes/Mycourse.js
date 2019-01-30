import React,{ Component } from 'react';
import { connect } from 'react-redux';

class Mycourse extends Component{
	constructor(props){
		super(props)
		this.state = {
			list:[
				{
					id:1,
					name: '111',
				},{
					id:2,
					name: '222',
				},{
					id:3,
					name: '333',
				},{
					id:4,
					name: '444',
				}
			],
			name: {}
		}
	}
	componentDidMount(){
		// 刚进来默认是第0项
		let name = this.state.list[0];
		this.setState({
			name: name
		})
	}
	click = (ev,index) =>{
		console.log(ev,index)
		let name = this.state.list[index];
		console.log(name)  //若果index=0，name的结果为{id:1,name:'111'}
		this.setState({
			name: name
		})
	}
	render(){
		return <div>
			<ul>
				{
					this.state.list.map((item,index)=>{
						return <li style={ {height:"50px"} } className='li' key={ index } onClick={ ev => {this.click(ev,index)} }>{ item.name }</li>
					})
				}
			</ul>
			<div>{ this.state.name.name }-{this.state.name.id}</div>

		</div>
	}
}

export default connect()(Mycourse)
