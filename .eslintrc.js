module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-native/all',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended', // Integrates Prettier with ESLint
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['react', 'react-native', '@typescript-eslint'],
  env: {
    'react-native/react-native': true, // React Native specific globals
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    // Prettier integration
    'prettier/prettier': 'off',

    // React Native specific rules
    'react-native/no-unused-styles': 'error',
    'react-native/split-platform-components': 'off', // Disabled as per your config
    'react-native/no-color-literals': 'warn', // Warn about inline colors
    'react-native/no-raw-text': 'warn', // Warn about raw text
    'react-native/sort-styles': 'off', // Disabled style sorting

    // React rules
    'react/prop-types': 'off', // Not needed with TypeScript
    'react/display-name': 'off',
    'react/react-in-jsx-scope': 'off', // Not needed with React 17+
    'react/jsx-uses-react': 'off', // Not needed with React 17+

    // TypeScript rules
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-require-imports': 'off', // Allows require()
    '@typescript-eslint/no-unused-vars': 'error', // Warn instead of error
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/no-empty-object-type': 'off',

    // JavaScript rules
    'no-console': 'warn', // Warn about console statements
  },
};
