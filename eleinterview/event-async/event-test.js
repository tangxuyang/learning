const EventEmitter = require('events');
let emitter = new EventEmitter();

emitter.on('myEvent',()=>{
  console.log('hi 1');
});

emitter.on('myEvent',()=>{
  console.log('hi 2');
});

emitter.emit('myEvent');
console.log('hi 3');

/*
结果应该是：
1
2
3

从中可以看到emit是同步的，它会阻塞下面代码的执行，这里我指的是console.log('hi 3');
*/
