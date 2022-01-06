module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parser: '@babel/eslint-parser',
  extends: ['plugin:react/recommended', 'airbnb'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks'],
  rules: {
    'arrow-parens': 0,
    'implicit-arrow-linebreak': 0,
    'function-paren-newline': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/function-component-definition': 0,
    'react/static-property-placement': 0,
    'react/state-in-constructor': 0,
    'react/jsx-wrap-multilines': 0,
    'react/jsx-props-no-spreading': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
  },
};
