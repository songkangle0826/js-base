import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import VoteHead from './VoteHead';
import VoteBody from './VoteBody';
import VoteFooter from './VoteFooter';


class Vote extends React.Component{
	static defaultProps = {
		"title":''
	}
	constructor(props){
		super(props);
		console.log(props)
	}
	render(){
		let { store } = this.props;
		return <section className={'panel panel-default'}>
			<VoteHead title={ this.props.title } />
			<VoteBody store= {store }/>
			<VoteFooter store= {store }/>
		</section>
	}
}

export default Vote;