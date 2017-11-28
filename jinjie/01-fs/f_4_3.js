// 删除目录

var fs=require("fs");
var pack=process.argv[2]; //要删除的目录(文件夹)的名字

if(fs.statSync(pack).isDirectory()){
    fs.rmdirSync(pack);
}

//directory  汉语意思是：目录