// @ts-nocheck
import config from '@antfu/eslint-config'
import { FlatCompat } from '@eslint/eslintrc'
import js from '@eslint/js'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import globals from 'globals'
import tseslint from 'typescript-eslint'

const arrayNewlineRules = [
  'error',
  {
    minItems: 3,
    multiline: true,
  },
]

const compat = new FlatCompat({
  recommendedConfig: {
    ...js.configs.recommended,
    ...tseslint.configs.recommended,
  },
})

export default config(
  { ignores: ['dist'] },
  {
    ...compat.config(),
    files: ['**/*.{ts,tsx, js, jsx, mts, mjs}'],
    languageOptions: {
      ecmaVersion: 'latest',
      globals: globals.browser,
      sourceType: 'module',
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'style/jsx-curly-newline': ['error', 'consistent'],
      'style/jsx-first-prop-new-line': [2, 'always'],
      'style/jsx-closing-tag-location': 2,
      'style/jsx-wrap-multilines': [
        'error',
        {
          declaration: 'parens-new-line',
          assignment: 'parens-new-line',
          return: 'parens-new-line',
          arrow: 'parens-new-line',
          condition: 'ignore',
          logical: 'ignore',
          prop: 'ignore',

        },
      ],
      'style/jsx-newline': [
        'error',
        {
          prevent: false,
        },
      ],
      'style/jsx-function-call-newline': 'error',
      'object-curly-newline': [
        'error',
        {
          ObjectExpression: 'always',
          ObjectPattern: {
            multiline: true,
            minProperties: 3,
          },
          ImportDeclaration: {
            multiline: true,
            minProperties: 3,
          },
          ExportDeclaration: {
            multiline: true,
            minProperties: 3,
          },
        },
      ],
      'no-console': 'off',
      'padding-line-between-statements': [
        'error',
        {
          blankLine: 'always',
          prev: [
            'function',
            'expression',
            'const',
            'let',
            'var',
            'block',
            'block-like',
            'multiline-block-like',
          ],
          next: '*',
        },
        {
          blankLine: 'never',
          prev: '*',
          next: 'import',
        },
      ],
      'array-element-newline': arrayNewlineRules,
      'array-bracket-newline': arrayNewlineRules,
      'spaced-comment': ['error', 'always'],
    },
  },
)
