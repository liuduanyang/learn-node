//修改文件的权限

var fs=require("fs");

var mod=process.argv[2];   //获取模式(权限的集合)
var file=process.argv[3];

fs.chmodSync(file,mod);

/*
 mod :模式 即权限的集合 

 比如
777： rwx rwx rwx
666:  rw- rw- rw-

r(4):读权限 w(2):写权限 x(1):执行权限
*/

//可通过 fs.statSync(file) 查看文件的uid gid size等详细信息

//查看文件的详细信息 见 f_6_3.js