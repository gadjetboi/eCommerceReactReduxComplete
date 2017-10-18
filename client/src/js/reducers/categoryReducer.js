import { 
	GET_CATEGORY_BY_ID_PENDING,
	GET_CATEGORY_BY_ID_FULFILLED,
	GET_CATEGORY_BY_ID_REJECTED,

	GET_CATEGORIES_PENDING,
	GET_CATEGORIES_FULFILLED,
	GET_CATEGORIES_REJECTED } from '../constants/product';

const initialState = {
	fetching: true,
	fetched: false,
	categories: {}
}

export default function categoryReducer(state = initialState, action){
	switch(action.type) {
		case GET_CATEGORIES_PENDING : {
			return { ...state, fetching: true }
			break;
		}
		case GET_CATEGORIES_FULFILLED : {
			return { ...state, categories: action.payload, fetching: false, fetched: true }
			break;
		}
		case GET_CATEGORIES_REJECTED : {
			return { ...state, categories: action.payload, fetching: false, error: action.payload }
			break;
		}

		case GET_CATEGORY_BY_ID_PENDING : {
			return { ...state, fetching: true }
			break;
		}
		case GET_CATEGORY_BY_ID_FULFILLED : {
			return { ...state, categories: action.payload, fetching: false, fetched: true }
			break;
		}
		case GET_CATEGORY_BY_ID_REJECTED : {
			return { ...state, categories: action.payload, fetching: false, error: action.payload }
			break;
		}
	}
	return state;
}