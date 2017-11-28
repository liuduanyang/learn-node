//execFile方法执行外部程序
var cp=require("child_process");

console.log("我是父进程,进程ID：",process.pid);
console.log('--------------');
console.log("我是子进程：");
cp.execFile('./waibu.js',["--version"],function(err,stdout,stderr){  //在当前程序中调用了node命令行程序
    if(err){
        console.log(err.message);
    }
    console.log(stdout);      //stdout表示外部程序运行的结果  不表示标准输出流
});

//怎么去查找外部文件：在环境变量目录下查找是否存在该文件
//环境变量目录中没有该文件，解决办法：将该路径添加到环境变量中 或 写该文件的绝对路径

/*
报错信息：
ENOENT:没找到该文件
EPERM:文件被占用
EACCES:没权限访问该文件
*/