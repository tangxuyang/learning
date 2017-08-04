可以从函数内部的注释获取大段文本，对于需要拼接字符串的需求来说这是一个不错的解决方案。  
```
var heredoc = require('heredoc');
var str = heredoc(function(){/*
  within this comment block,
  any text
  will
    be
      treated
        as
    pre-formatted
      multiline text
  (kinda like html <pre>)
  */})
```

这个插件主要利用了注释中书写字符串自由的优势。  
如果代码会被uglify。那么这个就没用了吧！！！
