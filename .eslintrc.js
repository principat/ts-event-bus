module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
  ],
  rules: {
    'eol-last': ["error", "always"],
    semi: ['error', 'always'],
    // note you must disable the base rule as it can report incorrect errors
    'no-use-before-define': 'off',
  },
  settings: {
    'import/extensions': [
      '.js',
      '.jsx',
      '.ts',
      '.tsx',
    ],
    'import/resolver': {
      typescript: {},
    },
    'react': {
      version: 'detect'
    }
  },
};
