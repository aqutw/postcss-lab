// https://webdesign.tutsplus.com/tutorials/postcss-quickstart-guide-gulp-setup--cms-24543
var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssnext = require('cssnext');
var cssnano = require('cssnano');
var precss = require('precss');

gulp.task('css', function () {
  var processors = [
  autoprefixer({browsers: ['last 1 version']}),
  // autoprefixer,
  cssnext,
  precss,
  cssnano
  ];
  return gulp.src('./src/*.css')
    .pipe(postcss(processors))
    .pipe(gulp.dest('./dest'));
});