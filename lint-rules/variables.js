const restrictedGlobals = require('eslint-restricted-globals');

module.exports = {
  rules: {
    // disallow specific globals
    'no-restricted-globals': ['error', 'isFinite', 'isNaN'].concat(restrictedGlobals)
  }
};
