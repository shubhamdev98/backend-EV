module.exports = {
  env: {
    node: true,
    commonjs: true,
    es2021: true,
  },
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    indent: ['error', 2], // Enforce 2-space indentation
    'linebreak-style': ['error', 'unix'], // Unix line endings
    quotes: ['error', 'single'], // Single quotes
    semi: ['error', 'always'], // Always use semicolons
    'prettier/prettier': 'error', // Enforce Prettier formatting
  },
};
