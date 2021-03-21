module.exports = {
  extends: 'airbnb-base',
  rules: {
    'comma-dangle': ['error', 'never'],
    'object-curly-newline': ['error', { multiline: true, consistent: true }],
    semi: ['error', 'never'],
    'sort-imports': ['error', { ignoreDeclarationSort: true }],
    'import/order': ['error', { groups: ['builtin', 'external', 'internal'], alphabetize: { order: 'asc' } }]
  }
}
