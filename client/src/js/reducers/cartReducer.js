import { 
	ADD_TO_CART_PENDING,
	ADD_TO_CART_FULFILLED,
	ADD_TO_CART_REJECTED,

	UPDATE_CART_PENDING,
	UPDATE_CART_FULFILLED,
	UPDATE_CART_REJECTED,
	
	GET_CART_BY_SESSION_PENDING,
	GET_CART_BY_SESSION_FULFILLED,
	GET_CART_BY_SESSION_REJECTED,

	GET_CART_PRODUCT_BY_IDS_PENDING,
	GET_CART_PRODUCT_BY_IDS_FULFILLED,
	GET_CART_PRODUCT_BY_IDS_REJECTED } from '../constants/cart';

const initialState = {
	cartAdding: true,
	cartAdded: false,
	cartUpdating: true,
	carts: {},
	products: {}
}

export default function cartReducer(state = initialState, action){
	switch(action.type) {
		case ADD_TO_CART_PENDING : {
			return { ...state, cartAdding: true, cartAdded: false, cartUpdating: false }
			break;
		}
		case ADD_TO_CART_FULFILLED : {
			return { ...state, carts: action.payload, cartAdding: false, cartAdded: true, cartUpdating: false }
			break;
		}
		case ADD_TO_CART_REJECTED : {
			return { ...state, carts: action.payload, cartAdding: false, cartAdded: false, cartUpdating: false, error: action.payload }
			break;
		}

		case UPDATE_CART_PENDING : {
			return { ...state, cartUpdating: true, cartAdding: false, cartAdded: false }
			break;
		}
		case UPDATE_CART_FULFILLED : {
			return { ...state, carts: action.payload, cartUpdating: false, cartAdding: false, cartAdded: false }
			break;
		}
		case UPDATE_CART_REJECTED : {
			return { ...state, carts: action.payload, cartUpdating: false, cartAdding: false, cartAdded: false, error: action.payload }
			break;
		}

		case GET_CART_BY_SESSION_PENDING : {
			return { ...state, cartUpdating: false, cartAdding: false, cartAdded: false, cartFetching: true }
			break;
		}
		case GET_CART_BY_SESSION_FULFILLED : {
			return { ...state, carts: action.payload, cartUpdating: false, cartAdding: false, cartAdded: false, cartFetching: false }
			break;
		}
		case GET_CART_BY_SESSION_REJECTED : {
			return { ...state, carts: action.payload, cartUpdating: false, cartAdding: false, cartAdded: false, cartFetching: false, error: action.payload }
			break;
		}

		case GET_CART_PRODUCT_BY_IDS_PENDING : {
			return { ...state, cartUpdating: false, cartAdding: false, cartAdded: false, cartFetching: true }
			break;
		}
		case GET_CART_PRODUCT_BY_IDS_FULFILLED : {
			return { ...state, products: action.payload, cartUpdating: false, cartAdding: false, cartAdded: false, cartFetching: false }
			break;
		}
		case GET_CART_PRODUCT_BY_IDS_REJECTED : {
			return { ...state, products: action.payload, cartUpdating: false, cartAdding: false, cartAdded: false, cartFetching: false, error: action.payload }
			break;
		}
	}
	return state;
}