// https://webdesign.tutsplus.com/tutorials/postcss-quickstart-guide-grunt-setup--cms-24545
module.exports = function(grunt) {
  grunt.initConfig({
 
    postcss: {
      options: {
        processors: [
        require('autoprefixer')(),
        // require('autoprefixer')()({browsers: ['last 1 version']}),
        require('cssnext')(),
        require('precss')()
        ]
      },
      dist: {
        src: 'src/style.css',
        dest: 'dest/style.css'
      }
    }
  
  });
 
  grunt.loadNpmTasks('grunt-postcss');
 
};