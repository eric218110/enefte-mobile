module.exports = {
  preset: 'react-native',
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: [
    '/node_modules/',
    'android',
    'ios',
    '.bundle',
    '.husky'
  ],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts(x)'],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node']
}
