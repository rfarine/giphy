module.exports = {
    'extends': 'airbnb',
    'plugins': [
        'react',
        'jsx-a11y',
        'import'
    ],
    'parserOptions': {
    'ecmaVersion': 6,
    'sourceType': 'module',
    'ecmaFeatures': {
        'jsx': true,
      }
    },
    'env': {
      'browser': true,
    },
    'rules': {
      'arrow-body-style': 'off',
    },
};