let gulp = require('gulp');
let gulpIf = require('gulp-if');
let gulpUglify = require('gulp-uglify');

let condition = true;

/*
当condition为true时，会执行uglify
*/
gulp.task('default',function(){
  gulp.src('./src/*.js')
    .pipe(gulpIf(condition,gulpUglify()))
    .pipe(gulp.dest('./dist'));
});

/*
当condition为false时，不会执行uglify
*/
gulp.task('false',function(){
  condition = false;
  gulp.src('./src/*.js')
    .pipe(gulpIf(condition,gulpUglify()))
    .pipe(gulp.dest('./dist'));
});
