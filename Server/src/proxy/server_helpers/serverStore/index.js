import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducers from '../../../frontend/frontendStore/reducers/index';
import axios from 'axios';

export default (req) => {
	const axiosInstance = axios.create({
		baseURL: 'http://react-ssr-api.herokuapp.com',
		headers: { cookie: req.get('cookie') || '' },
	});

	const middleware = [thunk.withExtraArgument(axiosInstance)];

	if (process.env.NODE_ENV === 'development') {
		middleware.push(logger);
	}

	const store = createStore(reducers, {}, applyMiddleware(...middleware));
	return store;
};
