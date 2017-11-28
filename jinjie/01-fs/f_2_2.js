// 创建一个新的文件

var fs=require("fs");
var file=process.argv[2]; //要创建的文件名


// 创建一个新的文件 文件内容为空
fs.writeFileSync(file,'');
//异步地写入数据到文件，如果文件已经存在,则替代文件    data 可以是一个字符串或一个 buffer
//api:http://nodejs.cn/api/fs.html#fs_fs_writefilesync_file_data_options
// 可 mypack/abc.txt 这样写参数


//注意 fs.writeFile 与 fs.write 的区别