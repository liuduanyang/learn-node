//分离子进程

//让父进程不影响子进程 如果父进程崩了或退出 子进程还能运行下去
//使用spawn方法

//如果不使用(正常情况下) 则子进程会随着父进程的终结而终结

var cp=require("child_process");

console.log("我是父进程，ID：",process.pid);

var child=cp.spawn("./waibu.js",[],{detached:true,stdio:['ignore',1,2]});
/*
    []为 子进程运行需要的参数
    detached:true： 表示父子进程分离
    stdio:['ignore',1,2]：  如果分离子进程的流进行重定向 
        'ignore'：stdin进行会略
        1：       把子进程的标准输出流重定向到系统控制台的标准输出流中(原来指向父进程)
        2:        把子进程的标准错误流重定向到系统控制台的标准错误流中(原来指向父进程)
*/

child.unref();  //父进程不再保留对子进程的引用

setTimeout(function(){
    console.log("父进程结束");
    process.exit(0);
},5000);