import React from 'react';
import ReactDOM from 'react-dom';
import Vote from './component/Vote/Vote.js';
import store from './store/index';




ReactDOM.render(<main>
	<Vote title={'中美大战，中国必胜!'}
	store={ store }/>
</main>, document.getElementById('root'))