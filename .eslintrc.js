module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
    jest: true,
  },
  globals: {
    JSX: true,
    NodeJS: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    project: ['./tsconfig.json'],
  },
  ignorePatterns: ['node_modules/*'],
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      settings: {
        'import/resolver': {
          typescript: {},
        },
        'react': {
          version: 'detect',
        },
      },
      env: {
        browser: true,
        node: true,
        es6: true,
      },
      rules: {
        '@typescript-eslint/ban-ts-ignore': ['off'],
        '@typescript-eslint/camelcase': ['off'],
        '@typescript-eslint/explicit-function-return-type': ['off'],
        '@typescript-eslint/explicit-module-boundary-types': ['off'],
        '@typescript-eslint/interface-name-prefix': ['off'],
        '@typescript-eslint/no-explicit-any': ['off'],
        '@typescript-eslint/no-unused-expressions': ['off'],
        '@typescript-eslint/no-var-requires': ['off'],
        '@typescript-eslint/no-use-before-define': ['off'],
        '@typescript-eslint/no-unused-vars': ['error'],
        'max-depth': ['error', 3],
        'no-nested-ternary': ['error'],
        'no-constant-binary-expression': ['error'],
        'no-unused-vars': ['off'],
        'comma-dangle': [
          'error',
          {
            arrays: 'only-multiline',
            objects: 'always-multiline',
            imports: 'only-multiline',
            exports: 'only-multiline',
          },
        ],
        'import/no-anonymous-default-export': ['off'],
        'no-async-promise-executor': ['off'],
        'no-empty-pattern': ['off'],
        'no-undef': ['error'],
        'no-var': ['error'],
        'object-curly-spacing': ['error', 'always'],
        'quotes': [
          'error',
          'single',
          {
            allowTemplateLiterals: true,
          },
        ],
        'semi': ['error', 'always'],
        'spaced-comment': ['off'],
        'no-prototype-builtins': ['off'],
        'sort-keys': ['off'],
        'space-before-function-paren': ['off'],
        'indent': ['off'],
        'no-console': [
          'error',
          {
            allow: ['warn', 'error'],
          },
        ],
        'no-useless-catch': ['off'],
        'no-empty': ['warn'],
        'prefer-template': ['error'],
        'import/order': [
          'error',
          {
            'groups': [
              'builtin',
              'external',
              ['internal', 'parent', 'sibling'],
              'index',
              'object',
              'type',
            ],
            'newlines-between': 'always-and-inside-groups',
          },
        ],
        'import/first': ['error'],
        'react/no-array-index-key': ['warn'],
        'react/jsx-uses-react': ['off'],
        'react/react-in-jsx-scope': ['off'],
        'padding-line-between-statements': [
          'error',
          {
            blankLine: 'always',
            prev: '*',
            next: 'return',
          },
          {
            blankLine: 'always',
            prev: ['const', 'let', 'var'],
            next: '*',
          },
          {
            blankLine: 'any',
            prev: ['const', 'let', 'var'],
            next: ['const', 'let', 'var'],
          },
        ],
        'array-func/prefer-array-from': 'off',
      },
      extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:import/recommended',
        'plugin:array-func/all',
        'prettier',
        'react-app',
        'react-app/jest'
      ],
      plugins: ['react', '@typescript-eslint', 'prettier'],
    },
  ],
};