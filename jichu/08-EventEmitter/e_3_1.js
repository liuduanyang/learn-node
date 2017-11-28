// 让自己定义的类具有事件机制(具有e_2_1.js 中 emitter的功能 即发出事件 响应事件)
// 两种实现方式

// 方式继承
// 继承方法一 使用js原生继承
// 老师的代码是面向对象思想的写的 下面的是我原创的 方便理解

var EventEmitter=require("events").EventEmitter;

function Dog(name){
    this.name=name;
}

Dog.prototype.__proto__=new EventEmitter();

var tadi=new Dog('tadi');

tadi.on('bark',function(){
    console.log(this.name+'is barking.');
});

var timer=setInterval(function(){
    tadi.emit('bark');
},1000);

setTimeout(function(){
    clearInterval(timer);
    console.log(tadi.name+'累了');
},8000);
