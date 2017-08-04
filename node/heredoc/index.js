let heredoc = require('heredoc');

let str = heredoc(function(){
  /*
  <!doctype html>
  <html>
    <head>

    </head>
    <body>
      <h1>hello world!!!</h1>
    </body>
  </html>
  */
});
console.log(str);
