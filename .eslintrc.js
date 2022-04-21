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
    parser: '@babel/eslint-parser'
  },
  rules: {
    // 非开发环境中使用console报warning
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // 非开发环境中使用debugger报warning
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // 禁止for循环出现方向错误的无限循环
    'for-direction': 'error',
    // getter必须有返回值并且禁止返回空
    'getter-return': ['error', { allowImplicit: false }],
    // 禁止使用hasOwnProperty、isPrototypeOf、propertyIsEnumerable
    // 取消限制
    'no-prototype-builtins': 'off',
    // 数组的方法除了forEach之外回调函数必须有返回值
    'array-callback-return': 'error',
    // 禁止在return语句里使用await
    'no-return-await': 'error',
    // 禁止出现'javascript:'urls
    'no-script-url': 'error',
    // 禁止出现没必要的字符串连接
    'no-useless-concat': 'error',
    // 禁止在函数声明时括号与函数名间加空格
    'space-before-function-paren': ['error', 'never'],
    // case的冒号前禁止有空格，冒号后必须有空格
    'switch-colon-spacing': ['error', { before: false, after: true }],
    // generator的*前面禁止有空格，后面必须有空格
    'generator-star-spacing': ['error', { before: false, after: true }],
    // 必须使用let和const代替var
    'no-var': 'error',
    // 必须使用对象方法和属性的简写方式
    'object-shorthand': 'error',
    // 必须使用箭头函数作为回调函数
    'prefer-arrow-callback': 'error',
    // 申明后不再被修改的变量必须使用const来申明
    // 取消限制
    'prefer-const': 'off'
  }
}
