var path = require('path');
var webpack = require('webpack');
var nodeExternals = require('webpack-node-externals');
/**
 * webpack2的extract-text-webpack-plugin
 * https://www.npmjs.com/package/extract-text-webpack-plugin
 */
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');

module.exports = {
	entry: './src/components/index.js',
	externals: [nodeExternals()],
	output: {
		filename: 'index.js',
		path: path.resolve(__dirname, 'dist'),
		libraryTarget: 'umd'
	},
	plugins: [
		new ExtractTextPlugin({
			filename: 'index.css',
			allChunks: true
		}),

		/**
		 * webpack2的postcss配置
		 * http://www.imooc.com/article/18175?block_id=tuijian_wz
		 */
		new webpack.LoaderOptionsPlugin({
			options: {
				postcss: function(){
					return [ require("autoprefixer")({ browsers: ['last 2 versions', 'Firefox ESR', '> 1%', 'ie >= 8', 'iOS >= 8', 'Android >= 4'] }) ]
				}
			}
    })
	],
	module: {
		rules: [
		{
			test: /\.(css|less)$/,
			use: ExtractTextPlugin.extract({
				fallback: 'style-loader',
				use: [
					{
						loader: require.resolve('css-loader'),
						options: {
							importLoaders: 1,
						},
					},
					{
						loader: require.resolve('postcss-loader'),
						options: {
							// Necessary for external CSS imports to work
							// https://github.com/facebookincubator/create-react-app/issues/2677
							ident: 'postcss',
							plugins: () => [
								require('postcss-flexbugs-fixes'),
								autoprefixer({
									browsers: [
										'>1%',
										'last 4 versions',
										'Firefox ESR',
										'not ie < 9', // React doesn't support IE8 anyway
									],
									flexbox: 'no-2009',
								}),
							],
						},
					},
					{
						loader: require.resolve('less-loader')
					}
				]
			})
		},
		{
			test: /.jsx?$/,
			loader: 'babel-loader',
			exclude: /node_modules/
		},
		{
			test: /\.(jpg|png|gif|eot|woff|ttf|woff2|svg)$/i,
			use: [
				{
					loader: 'file-loader',
					options: {
						name: './static/[name].[hash:8].[ext]'
					}
				}
			]
		},
	]
	},
	resolve: {
		modules: ['src', 'node_modules'],
		alias: {
			src: path.join(__dirname, 'src')
		}
	}
};
