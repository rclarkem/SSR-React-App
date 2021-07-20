import axios from 'axios';
// import { FETCH_USERS } from '../types/types';

export const FETCH_USERS = 'fetch_users';

export const fetchUsers = () => async (dispatch) => {
	console.log('Hello');
	const res = await axios.get('https://react-ssr-api.herokuapp.com/users');
	console.log(res);
	dispatch({ type: FETCH_USERS, payload: res });
};

export const test = () => {
	return 'Hi';
};
