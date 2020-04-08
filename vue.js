module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
  },
  extends: [
    'plugin:vue/recommended',
    'eslint:recommended',
    'prettier/vue',
    'plugin:prettier/recommended',
  ],
  plugins: ['simple-import-sort'],
  rules: {
    'simple-import-sort/sort': 'warn',
    'vue/component-name-in-template-casing': ['error', 'PascalCase'],
    'vue/html-quotes': ['error', 'double', { avoidEscape: true }],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  },
  parserOptions: {
    sourceType: 'module',
    parser: 'babel-eslint',
  },
}
