import React from 'react'
import { connect } from 'react-redux';
import reducers from './reducers';

import Layout from './pages/Layout';

export default class Main extends React.Component {
	
	constructor(props) {
		super(props);
	}

	mapStateToProps(state) {
		return reducers;
	}

	render() {
		const Main = connect(this.mapStateToProps)(Layout);

		return (
			<div>
				<Main />
			</div>
		)
	}
}