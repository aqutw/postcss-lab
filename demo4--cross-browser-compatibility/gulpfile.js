var gulp = require('gulp');
var postcss = require('gulp-postcss'); // need use gulp-postcss INSTEAD OF postcss for solving `TypeError: dest.on is not a function`

var autoprefixer = require('autoprefixer');
var color_rgba_fallback = require('postcss-color-rgba-fallback');
var opacity = require('postcss-opacity');
var pseudoelements = require('postcss-pseudoelements');
var vmin = require('postcss-vmin');
var pixrem = require('pixrem');
var will_change = require('postcss-will-change');

gulp.task('css', function () {
  var processors = [
      will_change,
      autoprefixer,
      color_rgba_fallback,
      opacity,
      pseudoelements,
      vmin,
      pixrem
  ];
  return gulp.src('./src/*.css')
    .pipe(postcss(processors)) //<-----------------postcss HERE.
    .pipe(gulp.dest('./dest'));
});