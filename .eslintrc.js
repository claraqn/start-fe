module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: ['eslint:recommended', 'airbnb-base', 'prettier'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'no-unused-vars': 'warn',
    'no-var': 'warn',
    'linebreak-style': 0,
  },
  globals: {
    React: true,
    ReactDOM: true,
  },
};
