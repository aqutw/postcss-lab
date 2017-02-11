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
      /**
      postcss-will-change plugin: https://github.com/postcss/postcss-will-change
      Everything You Need to Know About the CSS will-change Property
      CanIUse info: http://caniuse.com/#feat=will-change
      */
      will_change,
      /**
      Autoprefixer: https://github.com/postcss/autoprefixer
      Browserlist: https://github.com/ai/browserslist
      */
      autoprefixer({browsers:'safari >= 9, ie >= 11'}),
      /**
      postcss-color-rgba-fallback plugin: https://github.com/postcss/postcss-color-rgba-fallback
      CanIUse info: http://caniuse.com/#feat=css3-colors
      */
      color_rgba_fallback,
      /**
      postcss-opacity plugin: https://github.com/iamvdo/postcss-opacity
      CanIUse info: http://caniuse.com/#feat=css-opacity
      */
      opacity,
      /**
      postcss-pseudoelements plugin: https://github.com/axa-ch/postcss-pseudoelements
      CanIUse info: http://caniuse.com/#feat=css-gencontent
      */
      pseudoelements,
      /**
      postcss-vmin plugin: https://github.com/iamvdo/postcss-vmin
      CanIUse info: http://caniuse.com/#feat=viewport-units
      */
      vmin,
      /**
      node-pixrem plugin: https://github.com/robwierzbowski/node-pixrem
      CanIUse info: http://caniuse.com/#feat=rem
      */
      pixrem
  ];
  return gulp.src('./src/*.css')
    .pipe(postcss(processors)) //<-----------------postcss HERE.
    .pipe(gulp.dest('./dest'));
});