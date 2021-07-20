import express from 'express';
import 'babel-polyfill';
import renderer from './helpers/renderes';
const app = express();
import createStore from './helpers/serverStore/index';

app.use(express.static('public'));

app.get('*', (req, res) => {
	const store = createStore();
	res.send(renderer(req, store));
});

app.listen(3000, () => {
	console.log('listening on port 3000');
});
