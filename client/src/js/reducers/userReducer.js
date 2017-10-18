import { FETCHING_USER, FETCHED_USER } from '../constants/user';

const initialState = {
	user: {
		id: '',
		fname: '',
		lname: ''
	},
	fetching: true,
	fetched: false,
	error: null
}

export default function userReducer(state = initialState, action){
	switch(action.type) {
		case FETCHING_USER : {
			return {
				...state, 
				fetching: true,
				fetched: false
			}
		}
		case FETCHED_USER : {
			return {
				...state, 
				fetching: false,
				fetched: true, 
				user: action.payload
			}
		}
	}
	return state;
}