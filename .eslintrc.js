// ESLint Rules: https://eslint.org/docs/rules/
module.exports = {
    "env": {
        "es6": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018
    },
    "rules": {
      // enforce consistent brace style for all control statements
      "curly": "error",

      // enforce dot notation whenever possible
      "dot-notation": "error",

      // require the use of `===` and `!==`
      "eqeqeq": "error",

      // enforce consistent indentation
      "indent": ["error", 2, { "SwitchCase": 1 }],

      // enforces the usage of Unix line endings: \n for LF.
      "linebreak-style": ["error", "unix"],

      // enforce the consistent use single quotes
      "quotes": ["error", "single"],

      // require semicolons
      "semi": ["error", "always"],

      // disallow assignment operators in conditional expressions
      "no-cond-assign": ["error", "always"],

      // require `let` or `const` instead of `var`
      "no-var": "error",

      // require `const` declarations for variables that are never reassigned after declared
      "prefer-const": "error",
    }
};
