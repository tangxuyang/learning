/*
对微信服务器发来请求进行验证
验证策略是：
1.取出query中的timestamp,nonce,signature和echostr
2.对token,timestamp和nonce进行字母排序，然后把结果连接起来
3.对连接结果进行sha1的签名
4.如果计算出的签名跟传来的signature一样，就说明是微信服务器发来的请求，
否则可能是别人伪造的

这里的token是微信后台中拿到的！！
*/
let sha1 = require('sha1');
let config = require('../config');

module.exports = function(req,res,next){
  let {timestamp,nonce,signature,echostr} = req.query;
  let token = config.wechat.token;
  let str = [token,timestamp,nonce].sort().join('');
  let sha = sha1(str);
  if(sha == signature){
    next();
  }else{
    res.end("小伙，你不是来自微信服务器的！！");
  }
};
