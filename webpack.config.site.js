var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var isDev = process.env.NODE_ENV === 'dev';

var webpackConfig = {
  entry: [
    'react-dev-utils/webpackHotDevClient',
    './site/src/index.js',
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'raw-loader'
        })
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: require.resolve('css-loader'),
            },
            {
              loader: require.resolve('less-loader')
            }
          ]
        })
      },
      {
        test: /\.md$/,
        use: 'file-loader'
      },
      {
        test: /\.(jpg|png|gif|eot|woff|ttf|woff2|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '/static/media/[name].[hash:8].[ext]',
            }
          }
        ]
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: ['src', 'node_modules'],
    alias: {
      siteUtils: path.join(__dirname, 'site/src/utils'),
      siteComps: path.join(__dirname, 'site/src/components'),
      // 适配carno的代码
      carno: path.join(__dirname, 'src/index.js'),
      components: path.join(__dirname, 'src'),
      src: path.join(__dirname, 'src'),
      utils: path.join(__dirname, 'src/utils'),
      addons: path.join(__dirname, 'src/addons')
    },
  },
  devtool: '#eval',
};

var outputJs = isDev ? '[name].[hash:8].js' : 'index.js';
var outputCss = isDev ? '[name].[hash:8].css' : 'index.css';

webpackConfig.output = {
  path: isDev ? path.join(__dirname, 'www') : '/',
  filename: outputJs,
};

webpackConfig.plugins = [
  new ExtractTextPlugin({
    filename: outputCss,
    allChunks: true
  }),
  new webpack.ProvidePlugin({
    React: 'react',
  }),
  new HtmlWebpackPlugin({
    template: 'index.ejs',
    inject: true,
  }),
];

if (!isDev) {
  webpackConfig.plugins.push(new webpack.HotModuleReplacementPlugin());
}

module.exports = webpackConfig;
