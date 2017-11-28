//spawn方法执行外部程序

//采用流的方式 可以接收到一点数据就传出 适用于大量数据的情况

var cp=require("child_process");

console.log("我是父进程,进程ID：",process.pid);
console.log('--------------');
console.log("我是子进程：");

var child=cp.spawn('./waibu.js');

child.stdout.pipe(process.stdout);
child.stderr.pipe(process.stderr);


//模仿网站引入外部文件  见 z_3_2.js