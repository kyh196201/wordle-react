module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier',
    'plugin:prettier/recommended',
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/jsx-uses-react': 0,
    'react/react-in-jsx-scope': 0,
    // 'linebreak-style': [2, 'windows'],
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'all',
        bracketSpacing: true,
        printWidth: 80,
        tabWidth: 2,
        semi: true,
        arrowParens: 'avoid',
        endOfLine: 'auto',
      },
      {
        usePrettierrc: false,
      },
    ],
  },
};
