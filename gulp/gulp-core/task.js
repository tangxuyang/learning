let gulp = require('gulp');
let Promise = require('bluebird');

/*
gulp.task用来注册任务，它的签名如下
gulp.task(name[,deps],fn)
- name是任务的名称，一个字符串表示
- deps是一个可选的数组，表示前置任务
- fn是任务的具体内容，以函数的形式提供
*/


/*
一个很简单的任务，输出一段字符串
*/
gulp.task('output',function(){
  console.log('这是一个输出任务');
  // var cb = arguments[0];
  // setTimeout(function(){
  //   console.log("结束了。。。");
  //   cb();
  // },5000);
  /*
  上面注释部分我是为了验证异步执行的任务。如果注释去掉，执行的话，会报错的，告诉我们任务完成回调调用了太多次了。我从我得出结论，如果gulp发现你注册的任务fn，没有参数，它就认为这个任务是同步的，执行这个函数，然后执行任务成功回调。如果它发现你的这个任务fn是有参数的，它就认为是异步的，那么就不会再执行任务成功回调了，而是等着你在任务完成后自己执行，这样gulp就会一直等待！

  我还要更新一下我对于异步任务的认识，上面的描述是正确的，至少从我的demo中是这样的。同时我还发现还有一种方式可实现异步的。那就是你的任务fn返回值是一个promise。这个请参考下面的promiseTask，我使用了bluebird库来提供Promise的支持。。。
  */
})

/*
第二个参数是一个依赖任务的数组
*/
gulp.task('output2',['output'],function(){
  console.log('依赖output任务');
})


/*
任务会是异步执行的，此时就要告知任务调用方任务已经执行完了，因此fn是可以接收一个回调函数的
*/

gulp.task('asyncTask',function(cb){
  console.log((new Date()).getTime());

  //5秒钟后告诉gulp任务执行完成了
  setTimeout(function(){
    console.log((new Date()).getTime());
  },5000)
});

/*
任务可以返回一个stream或是一个promise
*/
//返回一个流的形式
gulp.task('streamTask',function(){
  return gulp.src("*.js");
});

//返回一个Promise
gulp.task('promiseTask',function(){
  console.log((new Date()).getTime());
  return new Promise(function(resolve,reject){
    setTimeout(function(){
      console.log((new Date()).getTime());
      resolve();
    },5000);
  });
});
