import axios from "axios";
import store from '../store';
import { GET_PRODUCTS_BY_CATEGORY_ID } from '../constants/product';
import { getApiBaseUrl } from '../utilities';

const apiUrl = getApiBaseUrl();

export function getProductsByCategoryId(categoryId) {

	return function(dispatch) {
		console.log('dispatch getProductsByCategoryId : ');
		console.log(categoryId);
		
		dispatch({ 
				type: GET_PRODUCTS_BY_CATEGORY_ID, 
				payload: axios.post(apiUrl + "/products/", {
							categoryId: categoryId
						})
		});	
	}
}