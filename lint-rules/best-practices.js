module.exports = {
  rules: {
    // specify the maximum cyclomatic complexity allowed in a program
    complexity: ['off', 11],

    // disallow the use of alert, confirm, and prompt
    'no-alert': 'error',

    // enforce a maximum number of classes per file
    // https://eslint.org/docs/rules/max-classes-per-file
    'max-classes-per-file': ['warn', 1]
  }
};
