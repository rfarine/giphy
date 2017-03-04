const { buildPath, entryFile } = require('../paths');

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
  };
};