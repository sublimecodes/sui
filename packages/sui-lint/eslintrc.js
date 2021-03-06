const prettierOptions = require('./.prettierrc.js')

module.exports = {
  env: {
    mocha: true
  },
  extends: [
    'standard',
    'standard-react',
    'prettier',
    'prettier/standard',
    'prettier/react'
  ],
  parser: 'babel-eslint',
  plugins: ['chai-friendly', 'prettier'],
  rules: {
    'chai-friendly/no-unused-expressions': [
      'error',
      {allowShortCircuit: true, allowTernary: true}
    ],
    'no-console': 'warn',
    'no-debugger': 'error',
    'no-nested-ternary': 'warn',
    'no-unused-expressions': 0,
    'react/default-props-match-prop-types': 'warn',
    'react/jsx-no-duplicate-props': ['warn', {ignoreCase: true}],
    'react/jsx-no-undef': 'warn',
    'react/jsx-pascal-case': [
      'warn',
      {
        allowAllCaps: true,
        ignore: []
      }
    ],
    'react/jsx-uses-react': 'warn',
    'react/jsx-uses-vars': 'warn',
    'react/no-deprecated': 'warn',
    'react/no-direct-mutation-state': 'error',
    'react/no-is-mounted': 'warn',
    'react/no-multi-comp': ['warn', {ignoreStateless: true}],
    'react/no-unused-prop-types': 1,
    'react/react-in-jsx-scope': 'warn',
    'react/require-render-return': 'warn',
    strict: 0,
    'prettier/prettier': ['error', prettierOptions]
  }
}
