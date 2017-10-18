import { 
	GET_PRODUCTS_BY_CATEGORY_ID_PENDING,
	GET_PRODUCTS_BY_CATEGORY_ID_FULFILLED,
	GET_PRODUCTS_BY_CATEGORY_ID_REJECTED  } from '../constants/product';

const initialState = {
	fetching: true,
	fetched: false,
	products: {}
}

export default function productReducer(state = initialState, action){
	switch(action.type) {
		case GET_PRODUCTS_BY_CATEGORY_ID_PENDING : {
			return { ...state, fetching: true }
			break;
		}
		case GET_PRODUCTS_BY_CATEGORY_ID_FULFILLED : {
			return { ...state, products: action.payload, fetching: false, fetched: true }
			break;
		}
		case GET_PRODUCTS_BY_CATEGORY_ID_REJECTED : {
			return { ...state, products: action.payload, fetching: false, error: action.payload }
			break;
		}
	}
	return state;
}