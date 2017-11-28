//监视文件和目录

//高级方式 :watch
//底层方式：watchFile 和 unwatchFile

//监视文件或目录的变化 从而进行相应的操作
var fs=require("fs");

var w=fs.watch(__dirname,console.log);   //将发生的变化打印出来 比如删除一个文件等
//第一个参数为要监视的文件或目录
//console.log是监听者 可选

process.on('SIGNAL',function(){   //按下ctrl+c触发SIGNAL事件
    w.close();                    //结束监听

    console.log("您结束了进程");
    process.exit();
});


//api:http://nodejs.cn/api/fs.html#fs_fs_watch_filename_options_listener