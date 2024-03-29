const path = require('path');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base');
const webpackNodeExternals = require('webpack-node-externals');

const config = {
	// bundle for nodejs
	externalsPresets: { node: true },
	// webpack where the root file of our server application
	entry: './src/proxy/server_index.js',
	// webpack where to put output file that is generated
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'build'),
	},

	// devtool: 'source-map',
	mode: process.env.NODE_ENV,
	externals: [webpackNodeExternals()],
};

module.exports = merge(baseConfig, config);
