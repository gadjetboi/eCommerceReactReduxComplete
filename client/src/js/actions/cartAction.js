import axios from "axios";
import store from '../store';
import { getApiBaseUrl } from '../utilities';

import { 
	ADD_TO_CART, 
	UPDATE_CART, 
	GET_CART_BY_SESSION, 
	GET_CART_PRODUCT_BY_IDS } from '../constants/cart';

const apiUrl = getApiBaseUrl();

export function addToCart(sessionId, productId, quantity) {
	return function(dispatch) {
		console.log('dispatch addToCart : ' + productId);
		dispatch({ 
			type: ADD_TO_CART, 
			payload: axios.post(apiUrl + "/cart/", {
									sessionId: sessionId,
									productId: productId,
									quantity: quantity
								})
		});
	}
}

export function updateCart(cartObj) {
	return function(dispatch) {
		console.log('dispatch update : ');
		console.log(cartObj);
		dispatch({ 
			type: UPDATE_CART, 
			payload: axios.put(apiUrl + "/cart/", cartObj)
		});
	}
}

export function getCartBySessionId(sessionId) {

	return function(dispatch) {
		console.log('dispatch getCartBySessionId : ');
		console.log(sessionId);
		
		dispatch({ 
				type: GET_CART_BY_SESSION, 
				payload: axios.get(apiUrl + "/cart/" + sessionId)
		});	
	}
}

export function getCartProductByIds(productIds) {

	return function(dispatch) {
		console.log('dispatch getCartProductByIds : ');
		console.log(productIds);
		
		dispatch({ 
				type: GET_CART_PRODUCT_BY_IDS, 
				payload: axios.post(apiUrl + "/products/", {
							productIds: productIds
						})
		});	
	}
}