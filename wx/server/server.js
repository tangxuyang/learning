let express = require('express');
let app = express();
let verify = require('./middlewares/verify');
let getRawBody = require('raw-body');
let contentType = require('content-type');
let utils = require('./utils');
let messageHandler = require('./messageHandler');
let token = require('./middlewares/token');

app.use(verify);
app.use(token);

app.get('/',function(req,res,next){
  //配置域名是验证用的
  let echostr = req.query.echostr;
  res.end(echostr);
});

app.post('/',function(req,res,next){
  getRawBody(req,{
    length: req.headers['content-length'],
    limit:'1mb',
    encoding: contentType.parse(req).parameters.charset
  },function(err,str){
    if(err) return next(err);
    utils.parseXmlAsync(str).then(function(content){
      messageHandler(content,req,res);
    });
  });
});

app.listen(8000);
