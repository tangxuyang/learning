let gulp = require('gulp');
let gulpSequence = require('gulp-sequence');

gulp.task('task1',function(cb){
  setTimeout(function(){
      console.log("task1...");
      cb();
  },2000)
})

gulp.task('task2',function(cb){
  console.log("task2...");
})

/*
因为task1是异步任务，所以它的输出要比task2晚。
但是有时候我们就是要让任务顺序执行，不管是否异步任务
*/
gulp.task('default',["task1","task2"])

gulp.task("sync",gulpSequence("task1","task2"));


/*
gulp-sequence的用法很高级的，它不仅能接收字符串参数，很能够接受数组参数
比如gulpSequence(["a","b"],"c",["d","e"])
a和b并行执行，不能保证它们的顺序
c在a和b执行完之后才执行
d和e在c执行完之后并行执行
*/
