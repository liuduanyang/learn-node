// 使用EventEmitter 发出事件

var EventEmitter=require('events').EventEmitter;
var emitter=new EventEmitter();

console.log("表演开始了...");

// 写两个事件的响应(emitter对象注册了两个事件的监听器)
emitter.on('hello',function(){
    console.log('响应hello事件');
});

emitter.on('bye',function(){
    console.log("响应bye事件");
});

// 写两个事件的触发(向emitter对象发出事件)
setTimeout(function(){
    emitter.emit('hello');
},1000);

setTimeout(function(){
    emitter.emit('bye');
},3000);


/*
EventEmitter 的每个事件由一个事件名和若干个参数组成，事件名是一个字符串，通常表达一定的语义。
对于每个事件，EventEmitter 支持 若干个事件监听器。

当事件触发时，注册到这个事件的事件监听器被依次调用，事件参数作为回调函数参数传递。

例

var events = require('events'); 
var emitter = new events.EventEmitter(); 
emitter.on('someEvent', function(arg1, arg2) { 
    console.log('listener1', arg1, arg2); 
}); 
emitter.on('someEvent', function(arg1, arg2) { 
    console.log('listener2', arg1, arg2); 
}); 

emitter.emit('someEvent', 'arg1 参数', 'arg2 参数'); 

执行以上代码，运行的结果如下：
listener1 arg1 参数 arg2 参数
listener2 arg1 参数 arg2 参数

详见 http://www.runoob.com/nodejs/nodejs-event.html

*/