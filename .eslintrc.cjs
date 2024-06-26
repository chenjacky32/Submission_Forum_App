module.exports = {
  root: true,
  env: { browser: true, es2020: true, 'cypress/globals':true },
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh','cypress'],
  rules: {
    'linebreak-style': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'import/extensions': 'off',
    'import/order': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-underscore-dangle': 'off',
    'no-use-before-define': 'off',
    'no-alert': 'off',
    'default-param-last': 'off',
    'react/jsx-no-bind': 'off',
    'default-param-last': 'off',
    'next-line no-unused-vars':'off'
  },
};
