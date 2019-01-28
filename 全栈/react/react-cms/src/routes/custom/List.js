import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


class List extends React.Component{
	constructor(props){
		super(props)
		this.state = {}
	}
	render(){
		let {data} = this.props;

		/*
         * <li onClick={ ev=>{this.props.history.push('/custom/detail')} }>
		*/

		return <ul className='list-group'>

			{
				data.map((item,index)=>{
					return <li className='list-group-item' key={index}>
						<Link to={{
							//search: `?id=${item.id}`,
							//state: item.id  // 2.state传值
							pathname: `/custom/detail/${item.id}`, //3.URL地址参数
						}}>
							编号： {item.id}
							&nbsp;&nbsp;
							姓名： {item.name}
						</Link>

						{/* 编号： {item.id}
							&nbsp;&nbsp;
							姓名： {item.name} */}

					</li>
				})
			}
	
		</ul>
	}
}


export default connect(state=>({...state.custom}))(List)

/*
 * 在SPA路由管控的项目中，从列表跳转详情，总需要传递一些信息给详情组件，以此来展示不同的信息，传递给详情也信息的方式有好多种
 	 【不推荐】
 	 	本地存储
 	 	REDUX存储
 	 	=》点击列表中的某一性的时候，把信息存储到本地或者REDUX中跳转到详情页面，把信息从本地或者REDUX中获取到即可，这样也算实现的信息的共享

 	[推荐]
 		1.问号传参
 		2.基于STATE传值,一旦页面刷新了，上一次传递的STATE的值就没有了
 		3.URL地址参数(把参数当作地址的一部分)
 			PATH='/custom/details:id'


*/

