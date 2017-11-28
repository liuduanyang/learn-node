var cp=require("child_process");

console.log("我是子进程，ID：",process.pid);

var timer=global.setInterval(function(){
    console.log('当前时间:',Date.now());
},2000);

global.setTimeout(function(){
    global.clearInterval(timer);
    console.log("Game over！");
},16000);