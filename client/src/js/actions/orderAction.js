import axios from "axios";
import store from '../store';
import { 
	GET_ORDER, 
	SAVE_ORDER, 
	SAVE_SHIPPING, 
	SAVE_TRACKING,
	SAVE_PAYMENT,
	SAVE_PRODUCT } from '../constants/order';

import { getApiBaseUrl } from '../utilities';

const apiUrl = getApiBaseUrl();

export function getOrderBySessionId(sessionId) {

	return function(dispatch) {
		console.log('dispatch getOrderBySessionId : ');
		console.log(sessionId);
		
		dispatch({ 
				type: GET_ORDER, 
				payload: axios.get(apiUrl + "/order/" + sessionId)
		});	
	}
}