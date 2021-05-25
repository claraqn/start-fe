module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: ['eslint:recommended', 'airbnb-base', 'prettier'],
  parserOptions: {
    ecmaVersion: 9,
    //ecmaVersion 2018=9
    sourceType: 'module',
  },
  rules: {
    'no-unused-vars': 'warn',
    'no-var': 'warn',
    'linebreak-style': 0,
    // export 개별 빨간줄 뜨는거 전체 enable 하는 것
    'import/prefer-default-export': 'off',
  },
};
