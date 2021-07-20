import { FETCH_USERS } from '../actions/user';

export default (state = [], action) => {
	switch (action.type) {
		case FETCH_USERS:
			return action.payload.data;
		default:
			return state;
	}
};
