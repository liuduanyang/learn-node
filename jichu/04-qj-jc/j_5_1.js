// 响应信号量

//响应其它进程发出的信号

console.log('进程Id',process.pid);

process.stdin.resume();  //等待输入信息

process.on('SIGINT',function(){     //SIGINT为关闭进程的信号量  此段代码为事件监听  可通过ctrl+c来响应事件
    console.log('你的进程崩啦！ctrl+c');
    process.exit(0);  //杀掉程序
});

process.on('SIGTSTP',function(){   //SIGTSTP为暂停进程的信号量 此段代码为事件监听  可通过ctrl+z来响应事件
    console.log("你的进程暂停啦，ctrl+z");
});

//在linux下 输入命令: kill -2 进程id(pid)  可结束进程 可响应SIGINT事件 

//在linux下 输入命令: kill -20 进程id(pid)  可暂停进程 可响应SIGTSTP事件


// 进程可给进程发送信号

/*
var argv=process.argv;
process.kill(argv[2],argv[3]);

argv[2、3] 为获取的命令行参数 
kill()的第一个参数为 要关闭的进程id(pid) 第二个参数为发送的信号(如SIGTSTP)
*/

