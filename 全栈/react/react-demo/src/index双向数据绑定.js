import React from 'react';
import ReactDOM from 'react-dom';
import propTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.css'

class Temp extends React.Component{
	constructor(){
		super()
		this.state = {
			text: '哈哈哈'
		}
	}
	componentDidMount(){
	{/*  数据影响视图 */}
		setTimeout(()=>{
			this.setState({
				text: '厉害了'
			})
		},1000)
	}
	render(){
		let { text } = this.state;
		return <section className='panel panel-default'>
			<div className='panel-heading'>
				<input type='text' className='form-control' value={ text
				 } onChange={ (ev)=>{
				 	//=》在onchange中修改状态信息：实现的是视图改变数据
				 	this.setState({
				 		text: ev.target.value
				 	})
				 {/*  视图影响数据 */}

				 } }/>
			</div>
			<div className='panel-body'>
				{ text }
			</div>	
		</section>
	}
}


ReactDOM.render(<Temp />,document.getElementById('root'))