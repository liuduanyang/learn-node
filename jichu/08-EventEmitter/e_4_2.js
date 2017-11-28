var Radio=require('./e_4_1');
var stadion={
    freq:'106.7',
    name:'石家庄广播之声'
};

var radio=new Radio(stadion);

radio.on('open',function(){
    console.log('频率为:',stadion.freq,'名字为:',stadion.name);
    console.log('我爱你,塞北的雪~');
});

radio.on('stop',function(stadion){
    console.log(stadion.name+'已经被关闭了,再见！');
});


// 事件相关信息
console.log('radio对象上事件的名字有哪些：',radio.eventNames());
console.log('radio对象上open事件的监听者的数量：',radio.listenerCount('open'));
console.log('radio对象上open事件的监听者有哪些：',radio.listeners('open'));
