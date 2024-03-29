module.exports = {
	// webpack run babel on every file it runs through
	devtool: 'source-map',
	module: {
		rules: [
			{
				test: /\.js?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				options: {
					presets: ['@babel/preset-env', '@babel/preset-react'],
					plugins: ['@babel/plugin-transform-runtime'],
				},
			},
		],
	},
};
