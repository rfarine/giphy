const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const sassRules = require('./sassRules.js');

const {
  buildPath,
  componentsPath,
  entryFile,
  indexFile,
  nodeModulesPath,
  pagesPath,
  srcPath,
  stylesPath,
} = require('../paths');

const htmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: indexFile,
  filename: 'index.html',
  inject: 'body'
});

const extractTextPluginConfig = new ExtractTextPlugin('css/styles.css');

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
      },
      sassRules,
    ]
  },

  resolve: {
    modules: [
      srcPath,
      nodeModulesPath,
    ],

    alias: {
      components: componentsPath,
      pages: pagesPath,
      styles: stylesPath,
    },

    extensions: ['.js', '.jsx'],
  },

  plugins: [
    extractTextPluginConfig,
    htmlWebpackPluginConfig,
  ],

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