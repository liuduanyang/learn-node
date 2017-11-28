//对链接的操作

//创建链接(分为 创建硬链接和创建符号链接 符号链接也叫软链接)
//查看链接的内容

// 创建链接
var fs=require("fs");
var source; //源文件
var link;   //链接文件

var opt;

switch(process.argv.length){
    case 4:                 //通过判断参数长度来判断是硬链接还是软链接 软连接第三个参数([2])为 -s
    source=process.argv[2]; //源文件
    link=process.argv[3];   //链接文件

    fs.linkSync(source,link);
    break;

    case 5:
    opt=process.argv[2];
    source=process.argv[2]; 
    link=process.argv[3]; 

    if(opt==='-s'){
        fs.symlinkSync(source,opt);    //sym代表符号 这句话的意思是创建一个符号链接
    }else{
        console.log("error");
    }
    break;

    default:
    console.log("error");
}

// 创建硬链接：node f_5_1.js 源文件 链接文件 
// 创建软链接：node f_5_1.js -s 源文件 链接文件


//查看文件的链接 见f_5_2.js
