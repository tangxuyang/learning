/*

*/
let xml2js = require('xml2js');//把xml字符串转换成js对象
let Promise = require('bluebird');//提供Promise支持

exports.parseXmlAsync = function(xml){
  return new Promise(function(resolve,reject){
    xml2js.parseString(xml,{trim:true},function(err,content){
      if(err){//转换发生了错误
        reject(err);
      }
      else{
        extractFromArray(content);
        resolve(content);
      }
    });
  });
};

//把对象转换成xml
//用途特定，只对于当前微信的报文处理
exports.convertToXml = function convertToXml(key,obj){
  if(typeof obj != 'object'){
    return "<"+key + "><![CDATA["+obj+"]]></"+key+">";
  }

  let result = "";
  if(obj instanceof Array){
    for(var i = 0; i < obj.length; i++){
      result += convertToXml(key,obj[i]);
    }
  }else{
    if(key) result += "<"+key+">";
    for(var k in obj){
      result += convertToXml(k,obj[k]);
    }
    if(key) result += "</"+key+">";
  }

  return result;
}

//从xml2js把所有东西都变成了数组，把数组拆出来
//这个只用在特定的场合，因为我知道微信服务器发来的请求没有数组结构的
function extractFromArray(obj){
  if(obj != null && typeof obj == 'object'){
    if(!(obj instanceof Array)){
        for(var key in obj){
          if(obj[key] instanceof Array){
            obj[key] = obj[key][0];
          }else if(typeof obj[key] == 'object'){
            extractFromArray(obj[key]);
          }
        }
    }
  }
}
