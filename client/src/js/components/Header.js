import React from 'react';
import store from '../store';

import { getCategories } from "../actions/categoryAction";

import Category from './Category';

export default class Header extends React.Component {

	constructor(props) {
		super(props);
	}

	componentWillMount() {
		if(!store.getState().categoryReducer.fetched) {
			store.dispatch(getCategories());
		}
	}

	render() {
		const { categoryReducer } = store.getState();

		if(categoryReducer.fetching) {
			return (
				<div>
					<h1>Loading...</h1>
				</div>
			)
		}

		const categories = categoryReducer.categories.data;

		return (
			<div>
				<Category categories={categories} />
			</div>
		)
	}
}