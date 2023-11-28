module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  extends: [
    'airbnb-base',
    'plugin:prettier-vue/recommended',
    'plugin:vue/vue3-recommended',
    '@nuxtjs/eslint-config-typescript',
  ],
  rules: {
    // Disables eslint throwing an error on script setup vue files
    'import/first': 0,
    'vue/no-multiple-template-root': 0,
    'vue/multi-word-component-names': 0,
    'vue/html-indent': 0,
    'vue/singleline-html-element-content-newline': 0,
    'vue/html-closing-bracket-newline': 0,
    'vue/html-self-closing': 0,
    'vue/no-v-html': 0,
    'arrow-parens': 0,
    'space-before-function-paren': 0,
    'singleline-html-attributes': 0,
    'prefer-destructuring': [
      'error',
      {
        object: true,
      },
      {
        enforceForRenamedProperties: false,
      },
    ],
    semi: ['error', 'always'],
    'import/order': 'warn',
    'comma-dangle': ['error', 'always-multiline'],
    'max-len': [
      'warn',
      {
        code: 120,
        ignorePattern: '(http|<path*|d=|todo*|TODO*|points*|class*)',
        ignoreTemplateLiterals: true,
        ignoreStrings: true,
      },
    ],
    '@typescript-eslint/ban-ts-comment': [
      'error',
      {
        'ts-ignore': 'allow-with-description',
        minimumDescriptionLength: 10,
      },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        ts: 'never',
        vue: 'never',
      },
    ],
    'prettier-vue/prettier': [0, { endOfLine: 'auto' }],
  },
  overrides: [
    {
      files: ['e2e/**/*.js'],
      rules: {
        'no-console': 0,
        'func-names': 0,
        '@typescript-eslint/no-unused-vars': 'warn',
      },
    },
    {
      files: ['*.ts'],
      rules: {
        'no-undef': 0,
      },
    },
  ],
};
