var gulp = require('gulp');
var postcss = require('gulp-postcss'); // need use gulp-postcss INSTEAD OF postcss for solving `TypeError: dest.on is not a function`

var atImport = require('postcss-import');
var mqpacker = require('css-mqpacker');
var cssnano = require('cssnano');

gulp.task('css', function () {
  var processors = [
    atImport,
    mqpacker,
    /**
    Strip whitespace and final semicolons
    Remove comments
    Optimize font weights
    Discard duplicate rules
    Optimize calc() use
    Minify selectors
    Minimize longhand properties
    Merge rules
    */
    cssnano({
      // http://cssnano.co/options
      minifyFontValues: false, calc: {precision: 2}
    })
  ];
  return gulp.src('./src/*.css')
    .pipe(postcss(processors)) //<-----------------postcss HERE.
    .pipe(gulp.dest('./dest'));
});