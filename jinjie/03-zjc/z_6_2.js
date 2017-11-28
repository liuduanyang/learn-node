var cp=require("child_process");

console.log("我是父进程，ID：",process.pid);

var child=cp.fork("waibu_ipc.js");

//子进程发送消息给父进程是触发 msg是具体消息
child.on("message",function(msg){
    console.log("我是父进程，子进程的消息是：",msg);
});

//父进程给子进程发消息
setTimeout(function(){
    child.send("l 的父进程,ID："+process.pid);  //send内可接受任何数据 对象 数字 布尔  字符串...
},2000);

//子进程见 waibu_ipc.js