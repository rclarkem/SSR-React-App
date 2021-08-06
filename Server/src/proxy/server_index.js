import express from 'express';
import 'babel-polyfill';
import renderer from './server_helpers/renderes';
const app = express();
import createStore from './server_helpers/serverStore/index';
import proxy from 'express-http-proxy';
import { matchRoutes } from 'react-router-config';
import Routes from '../frontend/Routes';

app.use(
	'/api',
	proxy('http://react-ssr-api.herokuapp.com', {
		proxyReqOptDecorator(opts) {
			opts.headers['x-forwarded-host'] = 'localhost:3000';
			return opts;
		},
	})
);
app.use(express.static('public'));

app.get('*', (req, res) => {
	const store = createStore(req);

	const promises = matchRoutes(Routes, req.path)
		.map(({ route }) => {
			return route.loadData ? route.loadData(store) : null;
		})
		.map((promise) => {
			if (promise) {
				return new Promise((res, rej) => {
					promise.then(res).catch(res);
				});
			}
		});

	Promise.all(promises).then(() => {
		const context = {};
		const content = renderer(req, store, context);

		if (context.notfound) {
			res.status(404);
		}
		res.send(content);
	});
});

app.listen(3000, () => {
	console.log('listening on port 3000');
});
