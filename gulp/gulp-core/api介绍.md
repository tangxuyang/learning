gulp提供了一些api供我们使用，接下来我就一个一个的过一遍这些api.  

### gulp.src(globs[,options])
输出符合所提供的匹配模式(glob)或者匹配模式数组(globs)的文件。将返回一个vinyl files的stream，可以被pipe到别的插件中。  

只要操作源文件的任务都是从gulp.src开始的，它相当于去取这些文件。取文件的方法，是提供一个glob或者glob的数组。glob是模式匹配。

#### glob
匹配文件用的。

### gulp.dest(path[,options])
输出文件。
- path是一个字符串，或是一个函数。  
- options有cwd,mode两个属性



### gulp.task(name[,deps],fn)
定义构建任务。  
- name 是任务名，字符串
- deps是依赖任务，可选的，是个数组
- fn是任务的具体内容，接收一个callback参数，返回stream或promise

### gulp.watch(glob[,opts],tasks)或gulp.watch(glob[,opts,cb])
gulp.watch是监控文件变化，如果变化了就执行指定的任务！
