/*
消息处理
*/

//文字消息处理
function textHandler(message,httpContext){
  console.log(httpContext.req.access_token);
  let now = new Date().getTime();
  let str = `<xml>
  <ToUserName><![CDATA[${message.xml.FromUserName}]]></ToUserName>
  <FromUserName><![CDATA[${message.xml.ToUserName}]]></FromUserName>
  <CreateTime>${now}</CreateTime>
  <MsgType><![CDATA[text]]></MsgType>
  <Content><![CDATA[你说了：${message.xml.Content}]]></Content>
  </xml>`;
  httpContext.res.end(str);
}

//图片消息处理
function imageHandler(message,httpContext){

}

//语音消息处理
function voiceHandler(message,httpContext){

}

//视频消息处理
function videoHandler(message,httpContext){

}

//图文消息处理
function newsHandler(message,httpContext){

}

//音乐消息处理
function musicHandler(message,httpContext){

}

function unkonwHandler(message,httpContext){
  let req = httpContext.req;
  let res = httpContext.res;

  res.end("unkonwn type");
}

let TextMessage = {
  ToUserName:"",
  FromUserName:"",
  CreateTime:"",
  MsgType:"text",
  Content:""
};

let handlers = {
  text:textHandler,
  voice:voiceHandler,
  news:newsHandler,
  video:videoHandler,
  music:musicHandler,
  image:imageHandler,
  unknown:unkonwHandler
}

module.exports = function(message,req,res){
  let httpContext = {req:req,res:res};
  let handler = handlers[message.xml.MsgType] || handlers["unknown"];
  handler(message,httpContext);
};
