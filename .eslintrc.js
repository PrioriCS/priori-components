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
        extensions: ['.js', '.jsx'],
        caseSensitive: false,
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
  plugins: ['react', 'import'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'import/extensions': 'off',
    'react/prop-types': 'off',
    'react/display-name': 'off',
    'import/no-unresolved': 'off',
  },
};
