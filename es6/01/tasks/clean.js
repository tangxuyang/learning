import gulp from 'gulp';
//import gulpif from 'gulp-if';
import args from './util/args';
import del from 'del';

gulp.task('clean',()=>{
  return del(['server/public','server/views']);
})
