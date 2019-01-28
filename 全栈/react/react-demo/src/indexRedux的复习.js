import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

import VoteBase from './component/Vote/VoteBase';
import VoteHandle from './component/Vote/VoteHandle';


import store from './store/index';


ReactDOM.render(<section className={'panel panel-default'}>
	<VoteBase store={ store } />
	<VoteHandle store={ store } />
</section>,document.getElementById('root'));