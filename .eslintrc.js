const commonRules = {
  'object-curly-newline': [
    'error', {
      ObjectExpression: {
        consistent: true, multiline: true, minProperties: 3,
      },
      ImportDeclaration: {
        consistent: true, multiline: true, minProperties: 3,
      },
      ExportDeclaration: 'never',
    },
  ],
  'sort-imports': [
    'error',
    {
      ignoreCase: true,
      ignoreDeclarationSort: true,
      ignoreMemberSort: false,
    },
  ],
  'import/extensions': [
    'error',
    'ignorePackages',
    {
      js: 'never',
      jsx: 'never',
      ts: 'never',
      tsx: 'never',
    },
  ],
  'import/order': [
    'error',
    {
      'newlines-between': 'always',
      groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
      pathGroups: [
        // {
        //   pattern: '@blahaj/**',
        //   group: 'internal',
        //   position: 'before',
        // },
      ],
      pathGroupsExcludedImportTypes: ['builtin'],
      alphabetize: {
        order: 'asc',
        caseInsensitive: true,
      },
    },
  ],
  'import/prefer-default-export': 'off',
  'import/no-extraneous-dependencies': [
    'error',
    {
      devDependencies: [
        'webpack.*.js', '**/*.test.js', '**/*.spec.js', 'webpack.*.ts', '**/*.test.ts', '**/*.spec.ts',
      ],
    },
  ],
  'implicit-arrow-linebreak': 'off',
  'operator-linebreak': 'off',
  'no-plusplus': 'off',
  'function-paren-newline': 'off',
  'array-bracket-newline': [
    'error', 'consistent',
  ],
  'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
};

const commonExtensions = [
  'eslint:recommended',
  'airbnb',
];

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: [...commonExtensions],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: { ...commonRules },
  root: true,
};
