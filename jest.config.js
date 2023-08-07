module.exports = {
  transform: {
    '^.+\\.(t|j)sx?$': '@swc/jest',
  },
  testEnvironment: 'node',
  rootDir: './test',
  setupFiles: ['./__setup.ts'],
  snapshotFormat: {
    escapeString: true,
    printBasicPrototype: true,
  },
};
