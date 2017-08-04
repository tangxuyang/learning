import gulp from 'gulp';
import gulpif from 'gulp-if';
//import livereload from 'gulp-livereload';
import args from './util/args';
import liveserver from 'gulp-live-server';

gulp.task('serve',(cb)=>{
  console.log('watch',args.watch);
  if(!args.watch){
    return cb();
  }
  let server = liveserver.new(['--harmony','server/bin/www']);
  server.start();

  gulp.watch(['server/public/**/*.js','server/views/**/*.ejs'],function(file){
    server.notify.apply(server,[file]);
  });

  gulp.watch(['server/routes/**/*.js','server/app.js'],function(){
    server.start.bind(server)();
  })
})

//
