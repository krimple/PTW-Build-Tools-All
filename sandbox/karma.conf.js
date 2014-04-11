module.exports = function(config) {

  config.set({

    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'app/bower_components/jquery/dist/jquery.js',
      'app/bower_components/angular/angular.js',
      'app/bower_components/angular-mocks/angular-mocks.js',
      'app/scripts/**/*.js',
      'test/spec/**/*.js'
    ],
    port: 8080,
    logLevel: config.LOG_DEBUG,
    browsers: ['Chrome'],
    reporters: ['progress', 'coverage'],
    preprocessors: { 'app/scripts/**/*.js': ['coverage'] }

  });
};
