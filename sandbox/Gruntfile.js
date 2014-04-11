module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);
  require('time-grunt')(grunt);

  // Project configuration.
  grunt.initConfig({
    jshint: {
      src: ['app/**/*.js', 'Gruntfile.js'],
      options: {
        ignores: ['app/bower_components/**/*.js']
      },
      test: ["test/**/*.js"]
    },
    karma: {
      unit: {
        configFile: 'karma.conf.js',
        singleRun: true
      }
    },

    connect: {
        options: {
          port: 3000,
          // Change this to '0.0.0.0' to access the server from outside.
          hostname: 'localhost',
          base: 'app',
          keepalive: true
        },
    },
    watch: {
      scripts: {
        file: ['app/scripts/**/*.js'],
        tasks: ['jshint'],
        gruntfile: {
          files: ['Gruntfile.js']
        },
        livereload: {
          options: {
            livereload: '<%= connect.server.options.livereload %>'
          },
          files: [
            'app/*.html'
          ]
        }
      }
    }
  });

  grunt.registerTask('serve', [
    'jshint',
    'connect',
    'watch'
  ]);

  grunt.registerTask('test', [
    'jshint',
    'karma'
  ]);
};
