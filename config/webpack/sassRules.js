const ExtractTextPlugin = require('extract-text-webpack-plugin');
const IS_DEV = process.env.NODE_ENV === 'development';
const {
  componentsPath,
  srcPath,
} = require('../paths');

module.exports = {
  test: /\.s?css$/,
  use: ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: [{
      loader: 'css-loader',
      options: {
        sourceMap: IS_DEV,
        localIdentName: '[local]__[name]__[hash:base64:5]',
        modules: true,
        importLoaders: 2,
      }
    },
    {
      loader: 'postcss-loader',
      options: {
        sourceMap: IS_DEV
      }
    },
    {
      loader: 'sass-loader',
      options: {
        sourceMap: IS_DEV,
        includePaths: [ srcPath, componentsPath ]
      }
    }]
  }),
};