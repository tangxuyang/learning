let doSth = new Promise((resolve,reject)=>{
  console.log('hello');
  resolve();
});

setTimeout(()=>{
  doSth.then(()=>{
    console.log('over');
  })
},10000);

/*
hello跟over两个输出间隔10秒钟。
因为在创建Promise对象时，传入的函数就立马调用了，因此hello是立马输出的。
而在10秒后才给Promise对象注册了回调，因此要10秒才会执行over的输出！！
*/
