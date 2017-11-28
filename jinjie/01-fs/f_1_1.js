// 文件系统
// 文件系统(fs模块)的每个方法基本上都有同步的异步的两种方式
// 末尾带Sync的是同步方式 
// 函数的异步方式的参数比同步的多一个(最后一个参数) 就是callback(回调函数)
// 其中回调函数的第一个参数都会保留给 异常(error对象 如果没错则返回undefined或null)

// 根据操作对象的不同可分为 对文件操作 对目录操作 对链接操作 对文件的属性操作

// 查看文件  方法多种
// 通过底层方式查看文件内容

var fs=require("fs");
var file=process.argv[2];

var len=fs.statSync(file).size;  //获取file文件的大小
var buf=new Buffer(len);

var fid=fs.openSync(file,'r');
fs.readSync(fid,buf,0,len,0);  //参数:源文件 buf对象 从0字节开始 总共len字节 同步方式
console.log(buf.toString('utf-8'));
fs.closeSync(fid);

//高一级别的实现 f_1_2.js