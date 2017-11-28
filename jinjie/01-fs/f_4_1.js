//对目录的操作  创建目录 查看目录内容 删除目录

// 创建一个目录

var fs=require("fs");
var pack=process.argv[2]; //要创建的目录(文件夹)的名字

fs.mkdirSync(pack);

//查看目录中的内容 见 f_4_2.js
