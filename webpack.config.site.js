var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    'react-dev-utils/webpackHotDevClient',
    './test/index.js'
  ],
  output: {
    path: path.resolve(__dirname, '/'),
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: require.resolve('style-loader'),
          },
          {
            loader: require.resolve('raw-loader')
          }
        ]
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: require.resolve('style-loader'),
          },
          {
            loader: require.resolve('css-loader'),
          },
          {
            loader: require.resolve('less-loader')
          }
        ]
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
              name: '/static/[name].[hash:8].[ext]'
            }
          }
        ]
      },
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      React: 'react'
    }),
    new HtmlWebpackPlugin({
      template: 'index.ejs',
      inject: true
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: ['src', 'node_modules'],
    alias: {
      src: path.join(__dirname, 'src')
    }
  },
  devtool: '#eval'
};
