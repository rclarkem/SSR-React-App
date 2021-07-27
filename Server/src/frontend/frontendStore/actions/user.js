import axios from 'axios';
import { FETCH_USERS } from '../types/types';

export const fetchUsers = () => async (dispatch) => {
	const res = await axios.get('https://react-ssr-api.herokuapp.com/users');
	dispatch({ type: FETCH_USERS, payload: res });
};
