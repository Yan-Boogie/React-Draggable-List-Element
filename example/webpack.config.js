// @flow

const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'inline-source-map',
  mode: 'development',
  entry: [
    path.resolve(__dirname, 'entry.jsx'),
  ],
  output: {
    filename: 'bundle.js',
    path: __dirname,
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    contentBase: __dirname,
    port: 5334,
    progress: true,
    hot: true,
    historyApiFallback: true,
  },
  target: 'web',
  module: {
    rules: [{
      test: /\.jsx?$/,
      use: [
        'babel-loader',
        'react-hot-loader/webpack',
      ],
    }, {
      test: /\.css$/i,
      use: [{
        loader: 'style-loader',
      }, {
        loader: 'css-loader',
      }],
    }, {
      test: /\.(jpe?g|png|gif|svg|xlsx|pdf)$/i,
      use: [{
        loader: 'file-loader',
        options: {
          hash: 'sha512',
          digest: 'hex',
          name: '[hash].[ext]',
        },
      }],
    }],
  },
};
