import React from "react";
import store from '../store';
import { getProductsByCategoryId } from "../actions/productAction";
import ProductItem from '../components/ProductItem';

export default class Product extends React.Component {

	constructor(props) {
		super(props);
	}
	
	componentWillMount() {
		const categoryId = this.props.match.params.categoryId;
	    store.dispatch(getProductsByCategoryId(categoryId));
	}

	render() {
		const { productReducer } = store.getState();

		if(productReducer.fetching) {
			return (
				<div>
					<h1>Loading...</h1>
				</div>
			)
		}

		var products = productReducer.products.data;

		let productLayout = products.map((product, index) => {
			return ( 
				<ProductItem key={index} product={product} />
			)
		});

		return (
			<div>
				{ productLayout }
			</div>
		)
	}
}