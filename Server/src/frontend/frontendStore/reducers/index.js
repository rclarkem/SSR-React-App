import { combineReducers } from 'redux';
import user from '../reducers/user';
import auth from '../reducers/auth';
import admins from './admins';

export default combineReducers({
	users: user,
	auth: auth,
	admins: admins,
});
