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
    'rules': {
      'arrow-body-style': 'off',
      'react/jsx-filename-extension': 'off',
    },
};