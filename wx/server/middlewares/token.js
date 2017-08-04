/*
维护微信需要的access_token

向微信服务器发送access_token请求。保存到过期！

*/
let request = require('request');
let config = require('../config');
let Promise = require('bluebird');

let access_token;
let expires_time;
let url = "https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid="+config.wechat.appID+"&secret="+config.wechat.appSecret;
function updateAccessToken(force){
  return new Promise(function(resolve,reject){
    let now = (new Date()).getTime();
    //强刷，没有access_token或过期都要重新获取access_token    
    if(force || !access_token || expires_time < now){
      request({url:url,json:true},function(error,res,body){
        if(res.statusCode == 200){
          access_token = body.access_token;
          expires_time = now + body.expires_in*1000;
          resolve(access_token);
        }else{
          reject(body);
        }
      });
    }else{
      resolve(access_token);
    }
  });
}

exports.updateAccessToken = updateAccessToken;

module.exports = function(req,res,next){
  updateAccessToken().then(function(token){
    req.access_token = token;
    next();
  }).catch(function(){
    next();
  });
};
