import { FETCHING_USER, FETCHED_USER } from '../constants/user';

export function fetchedUser() {
	return {
		type: FETCHED_USER,
		payload: {
			id: '1',
			fname: 'Vanz',
			lname: 'Perla',
		}
	}
}
