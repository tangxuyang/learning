let gulp = require('gulp');
let gulpIgnore = require('gulp-ignore');


/*
test2.js会被剔除掉
*/
gulp.task('exclude',function(){
  gulp.src('./src/**/*.js')
    .pipe(gulpIgnore.exclude('test2.js'))
    .pipe(gulp.dest('./dist'));

    /*遇到个问题
      如果exclude中写的是./src/test2.js并不会被剔除，我搞不清楚为什么！
    */
})

/*
include的意思是从源中筛选符合条件的
*/
gulp.task('include',function(){
  gulp.src('./src/*.js')
    .pipe(gulpIgnore.include('test2.js'))
    .pipe(gulp.dest('./dist'));
})
