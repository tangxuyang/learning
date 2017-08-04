let gulp = require('gulp');
let uglify = require('gulp-uglify');

gulp.task('default',function(){
  gulp.src('./src/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist'));
})
