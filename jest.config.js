module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  globalSetup: '<rootDir>/jest-global-setup.ts',
  globalTeardown: '<rootDir>/jest-global-teardown.ts',
  setupFilesAfterEnv: ['<rootDir>/jest-test-setup.ts'],
};
