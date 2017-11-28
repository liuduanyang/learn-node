//fork方法执行node.js程序
//fork只能用来执行node程序
//利于执行Node 高效 功能强大
//默认支持分离子进程
//很好的支持进程间通信

//默认分离子进程的体现
var cp=require("child_process");

console.log("我是父进程，ID：",process.pid);

var child=cp.fork('./waibu.js');

setTimeout(function(){
    console.log("父进程结束");
    process.exit(0);    //在linux下子进程会继续执行
},5000);

//支持IPC进程通信 见 z_6_2.js
