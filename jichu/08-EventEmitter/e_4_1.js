// 效果同e_3_1.js
// 继承方式二 nodejs的util模块的inherits方法

var events=require('events');
var util=require('util');

var Radio=function(station){
    // events.EventEmitter.call(this);  这句话似乎没用

    var self=this;

    setTimeout(function(){
        self.emit('open',station);
    },0);
    setTimeout(function(){
        self.emit('stop',station);
    },5000);
}

util.inherits(Radio,events.EventEmitter); // Radio类继承EventEmitter类

module.exports=Radio;

// 引用见e_4_2.js