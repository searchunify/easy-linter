module.exports = {
  plugins: [],
  rules: {
    // forbid trailing commas in multiline object literals
    'comma-dangle': ['error', 'never'],

    // requires function names to match the name of the variable or property to which they are
    // assigned
    // https://eslint.org/docs/rules/func-name-matching
    'func-name-matching': [
      'off',
      'always',
      {
        includeCommonJSModuleExports: false
      }
    ],

    // require multiline ternary
    // https://eslint.org/docs/rules/multiline-ternary
    // TODO: enable?
    'multiline-ternary': ['error', 'always-multiline'],

    // disallow use of bitwise operators
    // https://eslint.org/docs/rules/no-bitwise
    'no-bitwise': 'off',

    // disallow un-paren'd mixes of different operators
    // https://eslint.org/docs/rules/no-mixed-operators
    'no-mixed-operators': [
      'error',
      {
        // the list of arthmetic groups disallows mixing `%` and `**`
        // with other arithmetic operators.
        groups: [
          ['%', '**'],
          ['%', '+'],
          ['%', '-'],
          ['%', '*'],
          ['%', '/'],
          ['**', '+'],
          ['**', '-'],
          ['**', '*'],
          ['**', '/'],
          ['&', '|', '^', '~', '<<', '>>', '>>>'],
          ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
          ['&&', '||'],
          ['in', 'instanceof']
        ],
        allowSamePrecedence: false
      }
    ],

    // disallow multiple empty lines and only one newline at the end
    'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 0 }],

    // disallow use of unary operators, ++ and --
    // https://eslint.org/docs/rules/no-plusplus
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],

    // disallow certain syntax forms
    // https://eslint.org/docs/rules/no-restricted-syntax
    'no-restricted-syntax': [
      'error',
      {
        selector: 'ForInStatement',
        message:
          'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.'
      },
      {
        selector: 'LabeledStatement',
        message:
          'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.'
      },
      {
        selector: 'WithStatement',
        message:
          '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.'
      }
    ],

    // disallow space between function identifier and application
    'no-spaced-func': 'error',

    // disallow dangling underscores in identifiers
    'no-underscore-dangle': [
      'error',
      {
        allow: [],
        allowAfterThis: false,
        allowAfterSuper: false,
        enforceInMethodNames: false
      }
    ],

    // disallow padding within blocks
    'padded-blocks': ['error', { blocks: 'never', classes: 'never', switches: 'never' }],

    // Require or disallow padding lines between statements
    // https://eslint.org/docs/rules/padding-line-between-statements
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'return' }
    ]
  }
};
