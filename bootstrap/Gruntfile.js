/*!
 * Bootstrap's Gruntfile
 * http://getbootstrap.com
 * Copyright 2013-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

module.exports = function(grunt){
  'use strict';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    less:{
      compileCore:{
        options:{
          strictMath: true,
          sourceMap: true,
          outputSourceFiles: true,
          sourceMapURL: '<%= pkg.name %>.css.map',
          sourceMapFilename: 'dist/css/<%= pkg.name %>.css.map'
        },
        src:'less/bootstrap.less',
        dest:'dist/css/<%= pkg.name %>.css'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');

  grunt.registerTask('default',['less:compileCore']);
  //grunt.registerTask('dist-css', ['less-compile', 'autoprefixer:core', 'autoprefixer:theme', 'csscomb:dist', 'cssmin:minifyCore', 'cssmin:minifyTheme']);
}
