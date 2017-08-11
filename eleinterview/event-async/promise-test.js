let doSth = new Promise((resolve,reject)=>{
  console.log('hello');
  resolve();
});//创建一个Promise对象

//状态从pendding到resolved调用then中注册的回调
doSth.then(()=>{
  console.log('over');
});

//结果是，先出去hello，再输出over
/*
其实then还接受第二个参数，是可选的，也是一个回调函数。它是在
状态从pendding到rejected的时候被调用的。
*/
