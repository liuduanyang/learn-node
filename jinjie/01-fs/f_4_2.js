// 查看目录中的内容

var fs=require("fs");
var pack=process.argv[2]; //要查看的目录(文件夹)的名字

console.log(fs.readdirSync(pack));

// .代表当前目录  ..代表上一级目录

//删除目录 见 f_4_3.js