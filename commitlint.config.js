module.exports = {
  extends: ['@commitlint/config-conventional'],
  formatter: '@commitlint/format',
  rules: {
    'type-case': [2, 'always', 'upper-case'],
    'type-enum': [
      2,
      'always',
      ['BUILD', 'CHORE', 'CI', 'DOCS', 'FEAT', 'FIX', 'PERF', 'REFACTOR', 'REVERT', 'STYLE', 'TEST', 'MERGE_CONFLICT'],
    ],
    'scope-empty': [2, 'always'],
    'subject-case': [0],
    'subject-empty': [2, 'never'],
  },
};
