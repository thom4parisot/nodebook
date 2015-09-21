'use strict';

var gulp = require('gulp');
var less = require('gulp-less');
var zip = require('gulp-zip');

gulp.task('less', function(){
  return gulp.src('src/less/**/*.less')
    .pipe(less({ compress: true }))
    .pipe(gulp.dest('src/css/'))
});

gulp.task('zip', function(){
  // production build
  gulp.src(['src/**/*', '!**/*-beta.*'])
    .pipe(zip('<%= version %>.zip'))
    .pipe(gulp.dest('dist/'));

  // beta build
  gulp.src(['src/**/*'])
    .pipe(zip('<%= version %>-beta.zip'))
    .pipe(gulp.dest('dist/'));
});

gulp.task('default', ['less'], function(){
  gulp.start('zip');
});