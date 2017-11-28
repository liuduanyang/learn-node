//采用异步方式的高级操作

var fs=require("fs");
var file=process.argv[2];

fs.readFile(file,function(err,buf){
    if(err){
        console.log(err.message);
        process.exit(1);
    }else{
        console.log(buf.toString('utf-8'));
    }
});

// 采用同步方式的高级操作 见f_1_3.js