const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');

const config = {
	// bundle for nodejs
	target: 'node',
	// webpack where the root file of our server application
	entry: './src/server_proxy.js',
	// webpack where to put output file that is generated
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'build'),
	},

	mode: process.env.NODE_ENV,
};

module.exports = merge(baseConfig, config);
