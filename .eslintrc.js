module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended', 'prettier', 'eslint-config-prettier'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [['@', './resources']],
        extensions: ['.js'],
        caseSensitive: false,
      },
      vite: {
        alias: {
          entries: [
            {
              find: '@',
              replacement: '/resources',
            },
          ],
        },
      },
    },
    react: {
      version: 'detect',
    },
  },
  globals: {
    route: 'writable',
    globalThis: 'writable',
    parametrized: 'writable',
  },
  plugins: ['import'],
  rules: {
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
  },
};
