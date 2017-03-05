var webpack = require('karma-webpack');
const {
  componentsPath,
  nodeModulesPath,
  srcPath,
} = require('./config/paths');

module.exports = (config) => {
  config.set({
    colors: true,

    browsers: [ 'PhantomJS' ],

    frameworks: [ 'mocha' ],

    files: [
      'test/**/*.test.js'
    ],

    plugins: [
      webpack,
      'karma-mocha',
      'karma-phantomjs-launcher',
      'karma-coverage',
      'karma-mocha-reporter',
    ],

    preprocessors: {
      'test/**/*.test.js': ['webpack'],
      'src/**/*.js': ['webpack'],
    },

    reporters: [ 'mocha' ],

    client: {
      captureConsole: false,
      mocha: {
        reporter: 'html',
        ui: 'bdd',
      },
    },

    mochaReporter: {
      output: 'autowatch',
      showDiff: 'true',
    },

    webpack: {
      devtool: 'inline-source-map',
      module: {
        rules: [
          {
            test: /\.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
          },
          {
            test: /\.s?css$/,
            use: [
              { loader: 'css-loader' },
              { loader: 'postcss-loader' },
              { loader: 'sass-loader' },
            ]
          },
        ]
      },

      externals: {
        'cheerio': 'window',
        'react/addons': 'react',
        'react/lib/ExecutionEnvironment': 'react',
        'react/lib/ReactContext': 'react',
      },

      resolve: {
        modules: [
          srcPath,
          nodeModulesPath,
        ],

        alias: {
          components: componentsPath,
        },

        extensions: ['.js', '.jsx'],
      },
    },

    webpackMiddleware: { noInfo: true }
  });
};