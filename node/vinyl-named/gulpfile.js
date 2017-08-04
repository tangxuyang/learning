let gulp = require('gulp');
let named = require('vinyl-named');
let through = require('through');

/*
vinyl-named给每一个文件都加上一个named的属性，值是文件的名字去除后缀名。。
*/

gulp.task('default',function(){
  return gulp.src('./src/**/*.js')
    .pipe(named())
    .pipe(through(function(file){
      console.log(file.named);
    }))
    .pipe(gulp.dest('./dist'));
})
