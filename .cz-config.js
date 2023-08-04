module.exports = {
  types: [
    {
      value: 'BUILD',
      title: 'BUILD',
      name: 'BUILD: Changes related to project build',
    },
    {
      value: 'CHORE',
      title: 'CHORE',
      name: 'CHORE: Changes to maintenance tasks and other non-code tasks',
    },
    {
      value: 'CI',
      title: 'CI',
      name: 'CI: Changes to continuous integration settings',
    },
    {
      value: 'DOCS',
      title: 'DOCS',
      name: 'DOCS: Documentation changes',
    },
    {
      value: 'FEAT',
      title: 'FEAT',
      name: 'FEAT: Addition of a new functionality',
    },
    {
      value: 'FIX',
      title: 'FIX',
      name: 'FIX: Fixing a bug',
    },
    {
      value: 'PERF',
      title: 'PERF',
      name: 'PERF: Performance improvements',
    },
    {
      value: 'REFACTOR',
      title: 'REFACTOR',
      name: 'REFACTOR: Code refactoring',
    },
    {
      value: 'REVERT',
      title: 'REVERT',
      name: 'REVERT: Reverts a previous commit',
    },
    {
      value: 'STYLE',
      title: 'STYLE',
      name: 'STYLE: Changes related to code styles',
    },
    {
      value: 'TEST',
      title: 'TEST',
      name: 'TEST: Adding or Modifying Tests',
    },
  ],
  messages: {
    type: 'Select the type of change you are making:',
    scope: 'Enter the scope of this change:',
    subject: 'Title of this change:',
    body: 'Enter a more detailed description (optional):',
    confirmCommit: 'Are you sure you want to commit this commit? (y/n)',
    footer: 'List of closed issues (optional). use the format "fix #<issue number>":',
  },
};
