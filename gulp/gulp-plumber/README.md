阻止gulp插件错误引起的管道崩溃！！  


### 安装
```
npm install --save-dev gulp-plumber
```

### 使用
```
let plumber = require('gulp-plumber');
let coffee = require('gulp-coffee');

gulp.src('./src/*.ext')
  .pipe(plumber())
  .pipe(coffee())
  .pipe(gulp.dest('./dist'));
```



https://gist.github.com/floatdrop/8269868  

#Error management in gulp

Sucking at something is the first step to becoming sorta good at something
No one can assure you, that plugins will run smooth in any circumstances (except for tests - they could), so neither should you convince anyone, that your plugin will never break. Only thing, that you could possibly do (if something gone wrong) - is gracefully inform your plugin user, that something went wrong and die.

We are will use this plugin from beginning to demonstrate error management. Suppose you have a task in gulpfile.js that contains this code (we modified it a little bit to be closer to real-usage):

var coffee = require('gulp-coffee');

gulp.src('coffee/**/*.coffee')
  .pipe(gulpPrefixer('// Copyright 2014 (C) Aswesome company'))
  .pipe(coffee())
  .pipe(gulp.dest('js/'));
What could possibly go wrong? Well gulpPrefixer could emit errors event, as any of Stream gulp-plugins, for example gulp-sass. If you don't do anything with it inside task, Node will throw errors and whole task will be stopped.

You can easily avoid it by catch them and show by appending .on('error', gutil.log) handlers:

gulp.src('coffee/**/*.coffee')
  .pipe(gulpPrefixer('// Copyright 2014 (C) Aswesome company'))
  .on('error', gutil.log)
  .pipe(coffee())
  .on('error', gutil.log)
  .pipe(gulp.dest('js/'));
But this will not solve "stopping" problem of the task. By design, Node stream will stop accepting incoming data, if error event was raised. You can see it in stream.js:103 - cleanup function will deattach ondata handler from source (which in our case is gulp.src) and coffee plugin will stop receiving files although, the rest of the files can be compiled.

For now, we have no other solution besides patching pipe function behaviour. So the gulp-plumber may fix this problem:

gulp.src('coffee/**/*.coffee')
  .pipe(plumber())
  .pipe(gulpPrefixer('// Copyright 2014 (C) Aswesome company'))
  .pipe(coffee())
  .pipe(gulp.dest('js/'));
Note: This will work only if Stream class used in gulp-plugin will not panic on error event and stop being writable/readable.
