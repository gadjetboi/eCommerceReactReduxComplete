import React from "react";
import { addToCart, updateCart } from "../actions/cartAction";
import axios from "axios";

import store from '../store';

export default class Cart extends React.Component {

	constructor(props) {
		super(props);
	}

	clickedAddUpdateCart(productId, quantity) {
		console.log('clickedAddUpdateCart');
		const apiUrl = 'http://localhost:3000/api';

		const sessionId = localStorage.getItem('sessionId');

		axios.get(apiUrl + "/cart/" + sessionId).then((response) => {
			console.log(response.data);

			if(response.data) {
				const existingCartObj = response.data;
				
				const newCartObj = this.updateCartProduct(existingCartObj, productId, quantity);

				store.dispatch(updateCart(newCartObj));
			}
			else {
				store.dispatch(addToCart(sessionId, productId, quantity));	
			}
		}).catch((err) => {
			console.log(err);
		});
	}

	updateCartProduct(cartObj, productId, quantity) {
		const existingProductId = cartObj.products.findIndex(product => product._id == productId);
		console.log(existingProductId);
		if(existingProductId >= 0) {
			console.log('update product to carts');
			console.log(cartObj);
			console.log(cartObj.products[existingProductId].quantity)
			cartObj.products[existingProductId] = {
				"quantity": cartObj.products[existingProductId].quantity + 1,
				"_id": productId
			}
		}
		else {
			console.log('insert product to cart');
			cartObj.products.push({
				"quantity": quantity,
				"_id": productId
			});	
		}

		cartObj = this.updateCartQuantity(cartObj);
		return cartObj;
	}

	updateCartQuantity(cartObj) {
		let totalQuantity = 0;
		
		cartObj.products.forEach((product) => {
			totalQuantity += product.quantity;
		})

		cartObj.quantity = totalQuantity;
		
		return cartObj;
	}

	render() {

		const productId = this.props.productId;
		const quantity = 1; //TODO: get from the input field
		
		return (
			<div>
	 			 <div class="btn btn-primary" onClick={ this.clickedAddUpdateCart.bind(this, productId, quantity) }>Add to Cart</div>
	 		</div>
		)
	}
}