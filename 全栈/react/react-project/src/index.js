import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';

// redux
import store from './store/index';

// css
import './static/css/reset.min.css';
import './static/css/common.css';

// component
import Home from './routes/Home';
import Person from './routes/Person';
import Mycourse from './routes/Mycourse';

import NavTop from './component/NavTop';
import NavBottom from './component/NavBottom';

// antd 国际化组件 
import { LocaleProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');




ReactDOM.render(<Provider store={ store }>
	<HashRouter>
		<LocaleProvider locale={ zh_CN }>
			<div>
				{/* 顶部导航 */}
				<NavTop />

				{/* MAIN-》 ROUTE */}
				<main className='container'>
					<Switch>
						<Route path='/' exact component={ Home } />
						<Route path='/mycourse' component={ Mycourse } />
						<Route path='/person' component={ Person } />
						<Redirect to='/?from=404' />
					</Switch>
				</main>

				{/* 底部导航 */}
				<NavBottom />
			</div>
		</LocaleProvider>
	</HashRouter>
</Provider>, document.getElementById('root'));