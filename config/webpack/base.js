const HtmlWebpackPlugin = require('html-webpack-plugin');
const { buildPath, entryFile, indexFile } = require('../paths');

const htmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: indexFile,
  filename: 'index.html',
  inject: 'body'
})

module.exports = ({
  output = {},
}) => {
  return {
    entry: entryFile,

    output: Object.assign({
      path: buildPath,
      filename: 'js/[name].js',
      chunkFilename: 'js/[name].chunk.js',
    }, output),

    module: {
      loaders: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.jsx$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
        }
      ]
    },

    plugins: [ htmlWebpackPluginConfig ],
  };
};