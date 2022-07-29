module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
    // Recommended
    'plugin:@intlify/vue-i18n/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    '@typescript-eslint/no-use-before-define': 'off',
    'no-unused-vars': 'off',
    'no-use-before-define': 'off',
    // Optional.
    '@intlify/vue-i18n/no-dynamic-keys': 'error',
    '@intlify/vue-i18n/no-unused-keys': [
      'error',
      {
        extensions: ['.js', '.vue']
      }
    ],
  },
  settings: {
    'vue-i18n': {
      localeDir: './path/to/locales/*.{json,json5,yaml,yml}', // extension is glob formatting!
      // or
      // localeDir: {
      //   pattern: './path/to/locales/*.{json,json5,yaml,yml}', // extension is glob formatting!
      //   localeKey: 'file' // or 'path' or 'key'
      // }
      // or
      // localeDir: [
      //   {
      //     // 'file' case
      //     pattern: './path/to/locales1/*.{json,json5,yaml,yml}',
      //     localeKey: 'file'
      //   },
      //   {
      //     // 'path' case
      //     pattern: './path/to/locales2/*.{json,json5,yaml,yml}',
      //     localePattern: /^.*\/(?<locale>[A-Za-z0-9-_]+)\/.*\.(json5?|ya?ml)$/,
      //     localeKey: 'path'
      //   },
      //   {
      //     // 'key' case
      //     pattern: './path/to/locales3/*.{json,json5,yaml,yml}',
      //     localeKey: 'key'
      //   },
      // ]

      // Specify the version of `vue-i18n` you are using.
      // If not specified, the message will be parsed twice.
      messageSyntaxVersion: '^9.0.0'
    }
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],
}
