module.exports = {
  env: {
    browser: true,
    es2021: true,
    'vue/setup-compiler-macros':true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'standard'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'vue'
  ],
  rules: {
  }
}
