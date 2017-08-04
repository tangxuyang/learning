let gulp = require('gulp');

/*
gulp.watch用来监控文件变化。如果变化了就会执行指定的任务，或者是fn。

*/

gulp.task('demo',function(){
  console.log("文件变化了");
});

gulp.task('watch',function(){
  gulp.watch('watch/**/*.js',['demo']);
})

/*
在变化时执行fn时，会传入一个event对象，里面有type和path。
- type值有changed,added,deleted
- path是变化的文件的路径
*/
gulp.task('fnWatch',function(){
  gulp.watch('fnWatch/**/*.js',function(e){
    console.log('文件变化了');
    console.log(e);
  })
})
