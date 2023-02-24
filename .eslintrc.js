module.exports = {
    env: {
      browser: true,
      es2021: true,
      node: true,
    },
      settings: {
      react: {
        version: 'detect',
      },
    },
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:react/jsx-runtime',
      'plugin:import/recommended',
		  'plugin:import/typescript',
      'plugin:jsx-a11y/recommended',
    ],
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: [
      'react',
      'import',
      'react-hooks',
      'jsx-a11y',
    ],
    rules: {
          'react-hooks/rules-of-hooks': 'error',
          'react-hooks/exhaustive-deps': 'warn',
          'no-console': 'warn',
          'react/prop-types': 'off',
          'react/button-has-type': 'warn',
          'react/self-closing-comp': [
              'warn',
              {
                  component: true,
                  html: false
              }
          ],
          'react/jsx-sort-props': [
            'warn',
            {
              shorthandFirst: true,
              callbacksLast: true,
              noSortAlphabetically: false,
              reservedFirst: true,
                  multiline: 'last',
            },
          ],
        //   "react/prop-types": [<enabled>, { ignore: <ignore>, customValidators: <customValidator>, skipUndeclared: <skipUndeclared> }]
          "react/self-closing-comp": ["error", {
            "component": true,
            "html": true
          }],
        //   "react/jsx-sort-props": [<enabled>, {
        //     "callbacksLast": <boolean>,
        //     "shorthandFirst": <boolean>,
        //     "shorthandLast": <boolean>,
        //     "multiline": "ignore" | "first" | "last",
        //     "ignoreCase": <boolean>,
        //     "noSortAlphabetically": <boolean>,
        //     "reservedFirst": <boolean>|<array<string>>,
        //     "locale": "auto" | "any valid locale"
        //   }]
        'import/order': [
          'warn',
          {
            groups: [
              'builtin',
              'external',
              'internal',
              ['sibling', 'parent', 'index'],
              'type',
              'unknown',
            ],
            pathGroups: [
              {
                pattern: '{react*,react*/**}',
                group: 'external',
                position: 'before',
              },
              {
                pattern: '{./**/*.module.css,./**/*.css}',
                group: 'unknown',
              },
            ],
            pathGroupsExcludedImportTypes: ['react', 'unknown'],
            'newlines-between': 'always-and-inside-groups',
            alphabetize: {
              order: 'asc',
              caseInsensitive: true,
            },
          },
        ],
        'jsx-a11y/anchor-has-content': [
          'warn',
          {
            components: ['Link'],
          },
        ],
        'jsx-a11y/anchor-is-valid': [
          'warn',
          {
            components: ['Link'],
          },
        ],
      },
    }
