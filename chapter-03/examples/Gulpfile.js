'use strict';

const gulp = require('gulp');
const less = require('gulp-less');
const zip = require('gulp-zip');

gulp.task('less', () => {
  return gulp.src('src/less/**/*.less')
    .pipe(less({ compress: true }))
    .pipe(gulp.dest('src/css/'))
});

gulp.task('zip', () => {
  // production build
  gulp.src(['src/**/*', '!**/*-beta.*'])
    .pipe(zip('<%= version %>.zip'))
    .pipe(gulp.dest('dist/'));

  // beta build
  gulp.src(['src/**/*'])
    .pipe(zip('<%= version %>-beta.zip'))
    .pipe(gulp.dest('dist/'));
});

gulp.task('default', ['less'], () => gulp.start('zip'));
