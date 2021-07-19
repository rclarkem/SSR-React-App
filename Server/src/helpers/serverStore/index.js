import { createStore, applyMiddleware } from 'react-redux';
import thunk from 'redux-thunk';

export default () => {
	const store = createStore(reducers, {}, applyMiddleware);
	return store;
};
