const EventEmitter = require('events');

let emitter = new EventEmitter();

emitter.on('myEvent',function sth(){
  emitter.on('myEvent',sth);
  console.log('hi');
});

emitter.emit('myEvent');
emitter.emit('myEvent');

/*
这里并不会死循环
但是如果多次执行emit就会有意想不到的效果
*/
