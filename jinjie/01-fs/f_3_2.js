// 删除文件

var fs=require("fs");
var file=process.argv[2]; //要删除的文件

if(fs.statSync(file).isFile()){  //判断 file是不是一个文件
    fs.unlinkSync(file);         //如果是 则删除file文件
}


//注意以上操作(包括之前的那么些.js文件)都是对文件的操作  并非对目录(文件夹)的操作