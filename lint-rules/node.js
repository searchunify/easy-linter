module.exports = {
  env: {
    node: true
  },

  rules: {
    // disallow use of new operator with the require function
    'no-new-require': 'error',

    // disallow string concatenation with __dirname and __filename
    // https://eslint.org/docs/rules/no-path-concat
    'no-path-concat': 'error',

    // disallow use of process.env
    'no-process-env': 'error',

    // disallow process.exit()
    'no-process-exit': 'error',

    // disallow use of synchronous methods (off by default)
    'no-sync': 'error'
  }
};
