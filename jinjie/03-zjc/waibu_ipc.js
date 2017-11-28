var cp=require("child_process");

console.log("我是子进程，ID：",process.pid);

//响应父进程的消息
process.on("message",function(msg){
    console.log("我是子进程，父进程的消息是：",msg);
});

//给父进程发消息
process.send("l 的子进程,ID:"+process.pid);

