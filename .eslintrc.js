const { error } = require('console');

module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:i18next/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'i18next',
  ],
  rules: {
    'react/jsx-indent-props': [2, 2],
    'react/jsx-indent': [2, 2],
    'react/jsx-filename-extension': [
      2,
      { extensions: ['.js', '.jsx', '.tsx'] }],
    'linebreak-style': 0,
    'no-unused-vars': 'warn',
    'react/jsx-props-no-spreading': 'warn',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
    'react/require-default-props': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/function-component-definition': 'off',
    'no-shadow': 'off',
    'no-underscore-dangle': 'off',
    'i18next/no-literal-string': [
      'error',
      {
        markupOnly: true,
        ignoreAttribute: ['data-testid', 'to'],
      }],
    'max-len': ['error', { ignoreComments: true, code: 100 }],
  },
  globals: {
    __IS_DEV__: true,
  },
};
