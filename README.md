### INSTALL PEERDEPS

`npx install-peerdeps --dev @theabstractconnection/eslint-config`

### FOR PRECOMMIT HOOK

`npm i -D husky`

### FOR BASE

```
npm i -D eslint eslint-loader babel-eslint prettier eslint-plugin-prettier eslint-config-prettier eslint-plugin-import
```

### FOR REACT

```
npm i -D eslint eslint-loader babel-eslint prettier eslint-plugin-prettier eslint-config-prettier eslint-plugin-import
npm i -D eslint-config-react-app eslint-plugin-flowtype  eslint-plugin-jsx-a11y  eslint-plugin-react eslint-plugin-react-hooks
```

### FOR VUE

```
npm i -D eslint eslint-loader babel-eslint prettier eslint-plugin-prettier eslint-config-prettier eslint-plugin-import
npm i -D eslint-plugin-vue
```

### PACKAGE.JSON SCRIPTS

```
scripts: {
  "lint": "eslint --ext .js,.jsx,.vue src",
  "lint:fix": "eslint --ext .js,.jsx,.vue src --fix",
  "lint:check": "eslint --print-config .eslintrc | eslint-config-prettier-check",
  "precommit": "npm run lint:check && npm run lint"
}
```
