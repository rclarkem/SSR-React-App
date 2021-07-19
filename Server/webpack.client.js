const path = require('path');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base');

const config = {
	// webpack where the root file of our client application
	entry: './src/frontend/index.js',
	// webpack where to put output file that is generated
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'public'),
	},
	// devtool: 'source-map',
	mode: process.env.NODE_ENV,
};

module.exports = merge(baseConfig, config);
