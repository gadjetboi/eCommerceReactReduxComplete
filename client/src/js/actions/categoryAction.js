import axios from "axios";
import store from '../store';
import { GET_CATEGORIES } from '../constants/product';
import { getApiBaseUrl } from '../utilities';

const apiUrl = getApiBaseUrl();

export function getCategories() {
	return function(dispatch) {
		console.log('dispatch getCategories');
		dispatch({ 
			type: GET_CATEGORIES, 
			payload: axios.get(apiUrl + "/categories/")
		});
	}
}