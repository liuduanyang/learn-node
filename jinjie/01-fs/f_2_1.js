// 复制文件

var fs=require("fs");
var source=process.argv[2]; //源文件
var aim=process.argv[3];    //目标文件

fs.createReadStream(source).pipe(fs.createWriteStream(aim));

// 功能：将源文件的内容复制到目标文件 如果目标文件未创建则自动创建目标文件 然后再复制
// 如果目标文件内有内容 则删除已有内容然后再复制


// 创建一个新的文件 见f_2_2.js