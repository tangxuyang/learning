/*在浏览器环境中，全局中的this指向的是window对象，而在node中，文件顶层中this指的是什么呢？答案是exports而不是module，有没有震惊。其实我从来没有申请过node中this指的是什么，这是在underscore源代码中看到的！这里验证一下*/


console.log(this == exports);//true
console.log(this == module);//false
