module.exports = function(config) {
  config.set({
    basePath: '',

    frameworks: ['browserify', 'mocha', 'fixture'],

    files: [
      //'https://cdn.polyfill.io/v2/polyfill.min.js',  // <1>
      'examples/tests-browser/**/*.js',                // <2>
      'examples/tests/**/*.js',
      'examples/tests-browser/**/*.html',              // <3>
      {
        pattern: 'package.json',                       // <4>
        served: true,
        included: false                                // <5>
      }
    ],

    exclude: [],

    preprocessors: {
      'examples/tests/**/*.js': ['browserify'],         // <1>
      'examples/tests-browser/**/*.js': ['browserify'],
      'examples/tests-browser/**/*.html': ['html2js'],  // <2>
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

    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,

    browsers: ['Chrome'],

    customLaunchers: {
      iphone4: {
        base: 'BrowserStack',
        device: 'iPhone 4S',
        os: 'ios',
        os_version: '5.1'
      },
    },

    singleRun: true,
    concurrency: Infinity
  })
}
