module.exports = {
  semi: true,
  trailingComma: 'all',
  singleQuote: true,
  printWidth: 100,
  tabWidth: 2,
  jsxSingleQuote: false,
  bracketSpacing: true,
  arrowParens: 'avoid',
  endOfLine: 'auto',
  bracketSameLine: false,
  jsxBracketSameLine: false,
  overrides: [
    {
      files: ['*.tsx'],
      options: {
        bracketSameLine: false,
      },
    },
  ],
};
