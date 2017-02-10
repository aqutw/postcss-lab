var gulp = require('gulp');
var postcss = require('gulp-postcss');

var atImport = require('postcss-import');
var mqpacker = require('css-mqpacker');
var cssnano = require('cssnano');

gulp.task('css', function () {
  var processors = [
atImport, mqpacker, cssnano
  ];
  return gulp.src('./src/*.css')
    .pipe(postcss(processors))
    .pipe(gulp.dest('./dest'));
});