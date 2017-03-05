module.exports = {
    'extends': [
      'eslint:recommended',
      'airbnb'
    ],
    'parserOptions': {
    'ecmaVersion': 6,
    'ecmaFeatures': {
        'jsx': true,
      }
    },
    'env': {
      'browser': true,
    },
    'settings': {
      'import/resolver': {
        'webpack': {
          'config': 'config/webpack/base.js'
        }
      }
    },
    'rules': {
      'arrow-body-style': 'off',
      'react/jsx-filename-extension': 'off',
    },
};