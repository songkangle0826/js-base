

import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter,Route,Switch,Redirect } from 'react-router-dom';
import { Provider }  from 'react-redux';
import store from './store';
import 'bootstrap/dist/css/bootstrap.css';
import './static/css/common.css';
import './static/css/antd.css';

import Nav from './component/Nav';
import Home from './routes/Home';
import Plan from './routes/Plan';
import Custom from './routes/Custom';

ReactDOM.render(<Provider store={ store }>
	<HashRouter>
		<div>

			<Nav />
			{/* 基于HASH-ROUTER展示不同得页面 */}
			<Switch>
				<Route path='/' exact component={ Home }/>
				<Route path='/custom' component={ Custom }/>
				<Route path='/plan' component={ Plan }/>
				<Redirect to="/?lx=404" />
			</Switch>
		</div>
	</HashRouter>
</Provider>, document.getElementById('root'));

/* antd
1.安装 
	yarn add antd
2.快速使用
	->导入ANTD：需要使用那些组件，就导入那些组件
	->导入ANTD的样式：我们自己建立一个样式表，在样式表中几乎@import导入antd.css
	->ANTD提供的组件都是英文国际化的，需要中文显示，我们导入汉化模块

*/