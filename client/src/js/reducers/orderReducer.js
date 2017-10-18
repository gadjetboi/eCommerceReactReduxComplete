import { 
	GET_ORDER_PENDING,
	GET_ORDER_FULFILLED,
	GET_ORDER_REJECTED,

	SAVE_ORDER_PENDING,
	SAVE_ORDER_FULFILLED,
	SAVE_ORDER_REJECTED,

	SAVE_SHIPPING_PENDING,
	SAVE_SHIPPING_FULFILLED,
	SAVE_SHIPPING_REJECTED,

	SAVE_TRACKING_PENDING,
	SAVE_TRACKING_FULFILLED,
	SAVE_TRACKING_REJECTED,

	SAVE_PAYMENT_PENDING,
	SAVE_PAYMENT_FULFILLED,
	SAVE_PAYMENT_REJECTED,

	SAVE_PRODUCT_PENDING,
	SAVE_PRODUCT_FULFILLED,
	SAVE_PRODUCT_REJECTED } from '../constants/order';

const initialState = {
	fetching: true,
	fetched: false,
	saving: true,
	saved: false,
	order: {
		sessionId: null,
		orderNo: null,
		createdOn: null,
		quantity: 0,
		totalAmount: 0,
		orderStatus: null,
		shipping: {},
		tracking: {},
		payment: {},
		products: {}
	}
}

export default function categoryReducer(state = initialState, action){
	switch(action.type) {
		case GET_ORDER_PENDING : {
			return { ...state, fetching: true }
			break;
		}
		case GET_ORDER_FULFILLED : {
			return { ...state, order: action.payload, fetching: false, fetched: true }
			break;
		}
		case GET_ORDER_REJECTED : {
			return { ...state, order: action.payload, fetching: false, error: action.payload }
			break;
		}

		case SAVE_SHIPPING_PENDING : {
			return { ...state, saving: true }
			break;
		}
		case SAVE_SHIPPING_FULFILLED : {
			return { ...state, order.shipping: action.payload, saving: false, saved: true }
			break;
		}
		case SAVE_SHIPPING_REJECTED : {
			return { ...state, order.shipping: action.payload, saving: false, error: action.payload }
			break;
		}
		
		case SAVE_TRACKING_PENDING : {
			return { ...state, saving: true }
			break;
		}
		case SAVE_TRACKING_FULFILLED : {
			return { ...state, order.tracking: action.payload, saving: false, saved: true }
			break;
		}
		case SAVE_TRACKING_REJECTED : {
			return { ...state, order.tracking: action.payload, saving: false, error: action.payload }
			break;
		}

		case SAVE_PAYMENT_PENDING : {
			return { ...state, saving: true }
			break;
		}
		case SAVE_PAYMENT_FULFILLED : {
			return { ...state, order.payment: action.payload, saving: false, saved: true }
			break;
		}
		case SAVE_PAYMENT_REJECTED : {
			return { ...state, order.payment: action.payload, saving: false, error: action.payload }
			break;
		}

		case SAVE_PRODUCT_PENDING : {
			return { ...state, saving: true }
			break;
		}
		case SAVE_PRODUCT_FULFILLED : {
			return { ...state, order.products: action.payload, saving: false, saved: true }
			break;
		}
		case SAVE_PRODUCT_REJECTED : {
			return { ...state, order.products: action.payload, saving: false, error: action.payload }
			break;
		}
	}
	return state;
}