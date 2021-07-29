import React from 'react';
import ReactDOM from 'react-dom';
import 'babel-polyfill';
import Routes from './Routes';
import { composeWithDevTools } from 'redux-devtools-extension';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import reducers from './frontendStore/reducers/index';
import { renderRoutes } from 'react-router-config';

const middleware = [thunk];
if (process.env.NODE_ENV === 'development') {
	middleware.push(logger);
}

const composeEnhancer = composeWithDevTools(applyMiddleware(...middleware));

const devtools =
	process.env.NODE_ENV === 'production'
		? applyMiddleware(...middleware)
		: composeEnhancer;

const store = createStore(reducers, window.INITIAL_STATE, devtools);

ReactDOM.hydrate(
	<Provider store={store}>
		<BrowserRouter>
			<div>{renderRoutes(Routes)}</div>
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);
