import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducers from '../../../frontend/frontendStore/reducers/index';

export default () => {
	const middleware = [thunk];
	const logger = createLogger();

	if (process.env.NODE_ENV === 'development') {
		middleware.push(logger);
	}

	const store = createStore(reducers, {}, applyMiddleware(thunk));
	return store;
};
