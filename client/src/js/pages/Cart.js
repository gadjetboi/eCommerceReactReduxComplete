import React from 'react';
import store from '../store';
import { Link } from 'react-router-dom'
import { getCartBySessionId } from "../actions/cartAction";
import CartItem from '../components/CartItem';

//TODO: check the session id in local storage it doesn't expire.

export default class Cart extends React.Component{
	
	constructor(props) {
		super(props);
	}

	componentWillMount() {
		console.log('componentWillMount');

		const sessionId = localStorage.getItem('sessionId');
		
		console.log('Cart constructor');

		if(sessionId != null) {
			console.log('getCartBySessionId');
			console.log(sessionId);
			store.dispatch(getCartBySessionId(sessionId));
		}
	}

	render() {
		const { cartReducer } = store.getState();

		if(cartReducer.cartFetching) {
			return (
				<div>
					<h1>Loading...</h1>
				</div>
			)
		}

		const carts = cartReducer.carts;
		if(carts.data == null) {
			return (
				<div>
					<h1>Carts</h1>
					<h3>Cart is empty.</h3>
				</div>
			)
		}

		const products = carts.data.products;
		const productLayout = products.map((product, index) => {
			let productDetail = product.productDetail;
			return ( 
				<CartItem key={index} product={productDetail} />
			)
		});

		return (
			<div>
				<h1>Carts</h1>
				<div>Quantity: {carts.data.quantity}</div>
				<div>Total Amount: {carts.data.totalAmount}</div>
				<div>Status: {carts.data.status}</div>
				<div>
					{ productLayout }
				</div>
				<div>
					<Link to="/checkout">Checkout</Link>
				</div>
			</div>
		);
	}
}