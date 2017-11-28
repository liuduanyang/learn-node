// 查看文件的链接

var fs=require("fs");

var source=process.argv[2];

var lnk=fs.readlinkSync(source);    //获取source的链接

console.log(source,'->',lnk);