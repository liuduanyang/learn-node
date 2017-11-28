//修改文件名称或移动文件位置

var fs=require("fs");
var source=process.argv[2]; //源文件
var aim=process.argv[3];    //目标文件

fs.renameSync(source,aim);

//node f_3_1.js moveme.txt removeme.txt    则将moveme.txt改名为removeme.txt
//node f_3_1.js removeme.txt move/remove.txt 将removeme.txt移动到move文件夹下 并改名为remove.txt
//node f_3_1.js move/remove.txt remove.txt 将move文件夹下remove.txt移动到当前目录下 名字不变

//删除文件 见f_3_2.js