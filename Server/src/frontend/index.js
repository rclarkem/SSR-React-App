import React from 'react';
import ReactDOM from 'react-dom';
import 'babel-polyfill';
import Routes from './Routes';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { Provider } from 'react-redux';
import reducers from './frontendStore/reducers/index';

const middleware = [thunk];
const logger = createLogger();
if (process.env.NODE_ENV === 'development') {
	middleware.push(logger);
}

const store = createStore(reducers, {}, applyMiddleware(thunk));

ReactDOM.hydrate(
	<Provider store={store}>
		<BrowserRouter>
			<Routes />
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);
