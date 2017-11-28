// 管理异常
// js中try-catch 适用于同步编程的错误处理 不适用于nodejs的异步编程

// 在nodejs中 一旦出错会发出error事件
// 同样EventEmitter类也可以继承给别的类 或把方法给别的类 参考前几个文件 

var name=process.argv[2];
var EventEmitter=require('events').EventEmitter;
var events=new EventEmitter();

setTimeout(function(){
    console.log('您的名字为：',name);
},3000);

events.on('error',function(err){
    console.log(err);
    console.log("你没输入用户名吧？");
});

events.emit('error',new Error("你错了！"));

// 如果不在这个对象上进行捕获异常 那么可以使用process.on('uncaughtException',function(err){...})来处理异常
// 即在全局上进行捕获异常


//错误处理好文 https://segmentfault.com/a/1190000002741935