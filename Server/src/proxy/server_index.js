import express from 'express';
import 'babel-polyfill';
import renderer from './server_helpers/renderes';
const app = express();
import createStore from './server_helpers/serverStore/index';
import { matchRoutes } from 'react-router-config';
import Routes from '../frontend/Routes';

app.use(express.static('public'));

app.get('*', (req, res) => {
	const store = createStore();

	matchRoutes(Routes, req.path).map(({ route }) => {
		return route.loadData ? route.loadData() : null;
	});

	res.send(renderer(req, store));
});

app.listen(3000, () => {
	console.log('listening on port 3000');
});
