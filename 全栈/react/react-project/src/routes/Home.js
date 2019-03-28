import React,{ Component } from 'react';
import { connect } from 'react-redux';
import './home.css'

class Home extends Component{
	constructor(props){
		super(props)
		this.state = {
			list:[{
				id: 1,
				name: "zp",
				touxiang: 'baidu'
			},{
				id: 2,
				name: "skl",
				touxiang: 'baidu'
			}],
			listInfo:{},
		}
	}
	imgClick = (item)=>{
		this.setState({
			listInfo: item
		})
	}
	render(){
		return <div>
			首页
			{
				this.state.list.map((item,index)=>{
					return (
						<div className='div' onClick={ ()=>{ this.imgClick(item) }}>
							<img className='img'   />
							<div className='name'>{ item.name }</div>
						</div>
					)
				})
			}
			<div>{ this.state.listInfo.name }</div>
		</div>
	}
}

export default connect()(Home)
