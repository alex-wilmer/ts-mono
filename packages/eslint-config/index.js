module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
  ],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },
  env: {
    node: true,
    es6: true,
  },
  rules: {
    '@typescript-eslint/explicit-function-return-type': 0,
    'prettier/prettier': [
      1,
      {
        trailingComma: 'es5',
        useTabs: false,
        tabWidth: 2,
        semi: true,
        singleQuote: true,
        jsxBracketSameLine: true,
        jsxSingleQuote: true,
        bracketSpacing: true,
        proseWrap: 'always',
      },
    ],
  },
};
