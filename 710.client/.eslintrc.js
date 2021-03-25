const ALWAYS = 'always'
const NEVER = 'never'
const ERROR = 2
const WARN = 1
const OFF = 0
const PROD = process.env.NODE_ENV === 'production'

module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-strongly-recommended',
    '@vue/standard'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-console': PROD ? ERROR : WARN,
    'no-debugger': PROD ? ERROR : WARN,
    'space-before-function-paren': [WARN, NEVER],
    'vue/max-attributes-per-line': [ERROR, {
      singleline: 5,
      multiline: {
        max: 1,
        allowFirstLine: true
      }
    }],
    'vue/html-self-closing': OFF
  }
}
