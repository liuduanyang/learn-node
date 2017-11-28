//查看文件的详细信息

var fs=require("fs");
var file=process.argv[2];

console.log(fs.statSync(file));