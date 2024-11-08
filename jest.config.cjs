module.exports = {
  roots: ['<rootDir>/src'],
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '.+\\.(css|less|sass|scss|png|jpg|gif|ttf|woff|woff2|svg)$':
      'jest-transform-stub',
  },
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  resolver: '<rootDir>/config/jest/jestResolver.cjs',
};
