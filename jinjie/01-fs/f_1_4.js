// 底层方法可和高级高方法混合来用

var fs=require("fs");
var file=process.argv[2];

var fid=fs.openSync(file,'r'); //返回一个文件描述符给fid(int 型)
console.log(fs.readFileSync(fid).toString('utf-8'));
//注意 这里传的是fid(文件描述符)
fs.closeSync(fid);


/*
    保留(上例中fid不是保留的)的文件描述符：
    0:stdin
    1:stdout
    2:stderr
*/
// fs.writeSync(1,"我是标准输出流的保留文件描述符 我与标准输出流功能相同哦",0,'utf-8'); 
// api: http://nodejs.cn/api/fs.html#fs_fs_writesync_fd_string_position_encoding

// 更高级的方式(流的方式)实现查看文件内容见 f_1_5.js
