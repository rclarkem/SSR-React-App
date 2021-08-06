import { FETCH_USERS, FETCH_CURRENT_USER, FETCH_ADMINS } from '../types/types';

export const fetchUsers = () => async (dispatch, getState, api) => {
	const res = await api.get('/users');
	dispatch({ type: FETCH_USERS, payload: res });
};

// auth action for current user
export const fetchCurrentUser = () => async (dispatch, getState, api) => {
	const res = await api.get('/current_user');
	dispatch({ type: FETCH_CURRENT_USER, payload: res });
};

export const fetchAdmins = () => async (dispatch, getState, api) => {
	const res = await api.get('/admins');
	dispatch({ type: FETCH_ADMINS, payload: res });
};
