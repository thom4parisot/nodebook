'use strict';

/*eslint global-require: 0 */

module.exports = (grunt) => {
  grunt.initConfig({
    pkg: require('../package.json'),
    less: {
      src: 'src/less/**/*.less',
      dest: 'src/css/main.css',
      options: {
        cleancss: true,
        report: 'gzip',
        sourceMap: true
      }
    },

    crx: {
      files: {
        'dist/<%= pkg.version %>.crx': [
          'src/**/*',
          '!**/*-beta.*'
        ],
        'dist/<%= pkg.version %>-beta.crx': 'src/**/*'
      }
    },

    watch: {
      less: {
        files: '<%= less.src %>',
        tasks: ['less']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-crx');

  grunt.registerTask('default', ['build']);
  grunt.registerTask('build', ['less', 'crx']);
};
