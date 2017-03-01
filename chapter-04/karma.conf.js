// Karma configuration
// Generated on Sun Feb 19 2017 23:18:50 GMT+0100 (CET)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['browserify', 'mocha', 'fixture'],


    // list of files / patterns to load in the browser
    files: [
      //'https://cdn.polyfill.io/v2/polyfill.min.js',           // <1>
      'examples/tests-browser/**/*.js',                         // <2>
      'examples/tests/**/*.js',
      'examples/tests-browser/**/*.html',                       // <3>
      { pattern: 'package.json', served: true, included: false }// <4>
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'examples/tests/**/*.js': ['browserify'],                 // <1>
      'examples/tests-browser/**/*.js': ['browserify'],
      'examples/tests-browser/**/*.html': ['html2js'],          // <2>
    },


    browserify: {
      debug: true,
      transform: [ 'babelify' ],
      configure: function(bundle) {
        bundle.on('prebundle', function() {
          bundle.external('react/addons');
          bundle.external('react/lib/ReactContext');
          bundle.external('react/lib/ExecutionEnvironment');
        });
      }
    },

    browserStack: {
      forcelocal: true,
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],

    customLaunchers: {
      iphone4: {
        base: 'BrowserStack',
        device: 'iPhone 4S',
        os: 'ios',
        os_version: '5.1'
      },
    },


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
