module.exports = (config) => {
  config.set({
    testRunner: 'jest',
    mutator: 'javascript',
    babelrcFile: '.babelrc',
    transpilers: ['babel'],
    reporter: ['html', 'clear-text', 'progress'],
    htmlReporter: {
      baseDir: 'tests/mutation/html',
    },
    coverageAnalysis: 'off',
    mutate: ['src/**/*.js'],
  });
};
