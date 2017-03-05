const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
  buildPath,
  componentsPath,
  entryFile,
  indexFile,
  nodeModulesPath,
  srcPath,
} = require('../paths');

const htmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: indexFile,
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: entryFile,

  output: {
    path: buildPath,
    filename: 'js/[name].js',
    chunkFilename: 'js/[name].chunk.js',
  },

  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      }
    ]
  },

  resolve: {
    modules: [
      componentsPath,
      nodeModulesPath,
      srcPath,
    ],

    extensions: ['.js', '.jsx'],
  },

  plugins: [ htmlWebpackPluginConfig ],

  devtool: 'source-map',

  devServer: {
    contentBase: buildPath,
    compress: true,
    historyApiFallback: true,
    hot: true,
    https: false,
    noInfo: true,
  },
};