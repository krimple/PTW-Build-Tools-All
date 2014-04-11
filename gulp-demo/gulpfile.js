var stylish = require('jshint-stylish');
var jshint = require('gulp-jshint');
var gulp = require('gulp');


gulp.task('default', function() {
  gulp.src('./app/scripts/**/*.js')
      .pipe(jshint())
      .pipe(jshint.reporter(stylish));
  gulp.src('./test/spec/js/**/*.js')
      .pipe(jshint())
      .pipe(jshint.reporter(stylish));
});
