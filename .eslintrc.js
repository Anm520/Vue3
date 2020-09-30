module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'vue/no-unused-vars': 'warn',
    semi: 0, // 末尾分号
    'comma-dangle': [0, 'always-multiline'], // 数组和对象键值对最后一个逗号， never参数：不能带末尾的逗号, always参数：必须带末尾的逗号，always-multiline：多行模式必须带逗号，单行模式不能带逗号
    'space-before-function-paren': 0,
    'prefer-const': 0,
    'no-unused-vars': 0,
    'vue/no-unused-components': 0,
  },
};
