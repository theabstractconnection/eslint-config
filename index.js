module.exports = {
  root: true,
  ignorePatterns: ['node_modules/'],
  env: {
    node: true,
    browser: true,
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  plugins: ['simple-import-sort'],
  rules: {
    'simple-import-sort/sort': 'warn',
  },
  parserOptions: {
    sourceType: 'module',
    parser: 'babel-eslint',
    ecmaVersion: 8,
    ecmaFeatures: {
      modules: true,
      sourceType: 'module',
    },
  },
}
