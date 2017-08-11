setTimeout(function(){
  console.log(1);  //第五输出的
},0);//里面的函数不会执行，要等到此次代码执行完才会执行

new Promise(function(resolve){
  console.log(2);//创建Promise对象时立马执行，因此2是最先输出的
  for(var i = 0; i < 10000; i++){
    i == 9999 && resolve();
  }
  console.log(3);//3是第二输出的
}).then(function(){
  console.log(4);//第四输出的
});

console.log(5);//第三输出的
