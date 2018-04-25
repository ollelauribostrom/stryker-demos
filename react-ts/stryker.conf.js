const path = require('path');

module.exports = function(config) {
  config.set({
    testRunner: "jest",
    mutator: "typescript",
    transpilers: ["typescript", "webpack"],
    reporter: ['html', 'progress', 'clear-text'],
    htmlReporter: {
      baseDir: 'tests/mutation/html',
    },
    coverageAnalysis: 'off',
    tsconfigFile: "tsconfig.test.json",
    mutate: ["src/components/**/*.ts?(x)"],
    webpack: {
      configFile: path.join(__dirname, "webpack.config.stryker.js"),
      silent: true
    }
  });
};
