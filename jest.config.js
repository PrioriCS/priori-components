const JsConfigPathsMapper = require('jsconfig-paths-jest-mapper');
module.exports = {
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: new JsConfigPathsMapper({ configFileName: './jsconfig.json' }),
  setupFilesAfterEnv: ['<rootDir>/.jest/setup-tests.js'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
};