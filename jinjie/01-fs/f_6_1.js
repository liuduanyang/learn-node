//对文件的属性进行操作

//改变文件的所有者、改变文件的权限、查看文件的详细信息

//改变文件的所有者信息
var fs=require("fs");
var file=process.argv[2]; //获取文件名
var uid=process.argv[3]; //获取文件用户id
var gid=process.argv[4]; //获取文件的用户下的组id 

fs.chownSync(file,Number(uid),Number(gid)); 
//chown：  change owner改变所有者


//修改文件的权限 见 f_6_2.js